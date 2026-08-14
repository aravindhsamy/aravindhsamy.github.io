const DAYS=["Monday","Tuesday","Wednesday","Thursday","Friday"];
const DEFAULT_ROOMS=[
{id:1,name:"LAB - A",capacity:74,active:true},
{id:2,name:"LAB - B",capacity:64,active:true},
{id:3,name:"AB2 - Electronic Lab",capacity:0,active:true},
{id:4,name:"AB2 - 101",capacity:110,active:true},
{id:5,name:"AB2 - 203",capacity:85,active:true},
{id:6,name:"AB2 - 202",capacity:85,active:true},
{id:7,name:"AB1 - Moot Court Hall",capacity:85,active:true},
{id:8,name:"AB2 - 207",capacity:110,active:true},
{id:9,name:"AB2 - 205",capacity:60,active:true}
];
const DEFAULT_SLOTS=[
{id:1,start:"09:15",end:"10:10",active:true},
{id:2,start:"10:15",end:"11:10",active:true},
{id:3,start:"11:15",end:"12:10",active:true},
{id:4,start:"12:15",end:"12:55",active:true},
{id:5,start:"13:00",end:"13:55",active:true},
{id:6,start:"14:00",end:"14:55",active:true},
{id:7,start:"15:00",end:"15:55",active:true},
{id:8,start:"16:00",end:"16:55",active:true}
];
let rooms=loadData("rooms",DEFAULT_ROOMS);
let slots=loadData("slots",DEFAULT_SLOTS);
let timetable=loadData("timetable",{});
let currentDay="Monday";
let currentRow=null;
let currentRoom=null;
function loadData(key,fallback){
const data=localStorage.getItem(key);
return data?JSON.parse(data):JSON.parse(JSON.stringify(fallback));
}
function saveData(key,data){
localStorage.setItem(key,JSON.stringify(data));
}
function uid(){
return Date.now()+Math.floor(Math.random()*10000);
}
function formatTime(time){
if(!time)return "";
const [h,m]=time.split(":");
let hour=parseInt(h);
const ampm=hour>=12?"PM":"AM";
hour=hour%12||12;
return `${String(hour).padStart(2,"0")}:${m} ${ampm}`;
}
function slotText(slot){
return `${formatTime(slot.start)} - ${formatTime(slot.end)}`;
}
function showPage(page){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(page+"Page").classList.add("active");
document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
document.querySelector(`.nav-btn[data-page="${page}"]`)?.classList.add("active");
const titles={dashboard:["Dashboard","College timetable management system"],timetable:["Timetable","Manage Monday to Friday timetable"],settings:["Settings","Manage rooms and time slots"]};
document.getElementById("pageTitle").textContent=titles[page][0];
document.getElementById("pageSubtitle").textContent=titles[page][1];
if(page==="dashboard")updateDashboard();
if(page==="timetable")renderTimetable();
if(page==="settings"){renderRooms();renderSlots();}
}
document.querySelectorAll(".nav-btn").forEach(btn=>btn.addEventListener("click",()=>showPage(btn.dataset.page)));
function changeDay(day,button){
currentDay=day;
document.querySelectorAll(".day-tab").forEach(b=>b.classList.remove("active"));
button.classList.add("active");
document.getElementById("currentDayTitle").textContent=day;
renderTimetable();
}
function getDayData(){
if(!timetable[currentDay])timetable[currentDay]={};
return timetable[currentDay];
}
function getRecord(slotId,roomId){
const day=getDayData();
if(!day[slotId])day[slotId]={};
return day[slotId][roomId]||null;
}
function setRecord(slotId,roomId,data){
if(!timetable[currentDay])timetable[currentDay]={};
if(!timetable[currentDay][slotId])timetable[currentDay][slotId]={};
if(data)timetable[currentDay][slotId][roomId]=data;
else delete timetable[currentDay][slotId][roomId];
saveData("timetable",timetable);
}
function renderTimetable(){
const activeRooms=rooms.filter(r=>r.active);
const activeSlots=slots.filter(s=>s.active);
const head=document.getElementById("timetableHead");
const body=document.getElementById("timetableBody");
head.innerHTML="";
body.innerHTML="";
const tr=document.createElement("tr");
const timeTh=document.createElement("th");
timeTh.textContent="Time";
tr.appendChild(timeTh);
activeRooms.forEach(room=>{
const th=document.createElement("th");
th.innerHTML=`${escapeHTML(room.name)}${room.capacity?`<br><span>${room.capacity} Seats</span>`:""}`;
tr.appendChild(th);
});
head.appendChild(tr);
let count=0;
activeSlots.forEach(slot=>{
const row=document.createElement("tr");
const time=document.createElement("td");
time.className="time-cell";
time.textContent=slotText(slot);
row.appendChild(time);
activeRooms.forEach(room=>{
const td=document.createElement("td");
const record=getRecord(slot.id,room.id);
if(record?.lunch){
td.className="lunch-cell";
td.innerHTML="LUNCH<br>BREAK";
}else if(record){
count++;
td.className="class-cell";
td.innerHTML=`<div class="class-subject">${escapeHTML(record.subject)}</div><div class="class-section">${escapeHTML(record.section)}</div><div class="class-faculty">${escapeHTML(record.faculty)}</div>`;
}else{
td.className="empty-cell";
td.textContent="+";
}
td.onclick=()=>openClassModal(slot,room);
row.appendChild(td);
});
body.appendChild(row);
});
document.getElementById("currentDayCount").textContent=`${count} ${count===1?"class":"classes"}`;
}
function openClassModal(slot,room){
currentRow=slot.id;
currentRoom=room.id;
const record=getRecord(slot.id,room.id);
document.getElementById("classModalTitle").textContent=record?"Edit Class":"Add Class";
document.getElementById("classModalSubtitle").textContent=`${currentDay} • ${slotText(slot)}`;
document.getElementById("classDay").value=currentDay;
document.getElementById("classTime").value=slotText(slot);
document.getElementById("classRoom").value=room.name;
document.getElementById("classSubject").value=record?.subject||"";
document.getElementById("classSection").value=record?.section||"";
document.getElementById("classFaculty").value=record?.faculty||"";
document.getElementById("classLunch").checked=record?.lunch||false;
document.getElementById("classModal").classList.add("show");
}
function saveClass(){
const lunch=document.getElementById("classLunch").checked;
const subject=document.getElementById("classSubject").value.trim();
const section=document.getElementById("classSection").value.trim();
const faculty=document.getElementById("classFaculty").value.trim();
if(lunch){
setRecord(currentRow,currentRoom,{lunch:true});
closeModal("classModal");
renderTimetable();
updateDashboard();
return;
}
if(!subject&&!section&&!faculty){
setRecord(currentRow,currentRoom,null);
closeModal("classModal");
renderTimetable();
updateDashboard();
return;
}
if(!subject){
alert("Please enter a subject.");
return;
}
setRecord(currentRow,currentRoom,{subject,section,faculty,lunch:false});
closeModal("classModal");
renderTimetable();
updateDashboard();
}
function deleteClass(){
const record=getRecord(currentRow,currentRoom);
if(!record)return;
if(confirm("Delete this timetable record?")){
setRecord(currentRow,currentRoom,null);
closeModal("classModal");
renderTimetable();
updateDashboard();
}
}
function renderRooms(){
const body=document.getElementById("roomsBody");
body.innerHTML="";
rooms.forEach((room,index)=>{
const tr=document.createElement("tr");
tr.innerHTML=`<td>${index+1}</td><td><strong>${escapeHTML(room.name)}</strong></td><td>${room.capacity||"-"}</td><td><span class="status ${room.active?"active":"inactive"}">${room.active?"Active":"Inactive"}</span></td><td><button class="action-btn" onclick="editRoom(${room.id})">✏ Edit</button><button class="action-btn" onclick="toggleRoom(${room.id})">${room.active?"Deactivate":"Activate"}</button><button class="action-btn delete" onclick="deleteRoom(${room.id})">Delete</button></td>`;
body.appendChild(tr);
});
}
function openRoomModal(id=null){
document.getElementById("roomId").value=id||"";
document.getElementById("roomModalTitle").textContent=id?"Edit Room":"Add Room";
if(id){
const room=rooms.find(r=>r.id===id);
document.getElementById("roomName").value=room.name;
document.getElementById("roomCapacity").value=room.capacity||"";
document.getElementById("roomActive").checked=room.active;
}else{
document.getElementById("roomName").value="";
document.getElementById("roomCapacity").value="";
document.getElementById("roomActive").checked=true;
}
document.getElementById("roomModal").classList.add("show");
}
function editRoom(id){openRoomModal(id);}
function saveRoom(){
const id=Number(document.getElementById("roomId").value);
const name=document.getElementById("roomName").value.trim();
const capacity=Number(document.getElementById("roomCapacity").value)||0;
const active=document.getElementById("roomActive").checked;
if(!name){
alert("Please enter room name.");
return;
}
if(id){
const room=rooms.find(r=>r.id===id);
room.name=name;
room.capacity=capacity;
room.active=active;
}else{
rooms.push({id:uid(),name,capacity,active});
}
saveData("rooms",rooms);
closeModal("roomModal");
renderRooms();
renderTimetable();
updateDashboard();
}
function toggleRoom(id){
const room=rooms.find(r=>r.id===id);
if(room){
room.active=!room.active;
saveData("rooms",rooms);
renderRooms();
renderTimetable();
updateDashboard();
}
}
function deleteRoom(id){
const room=rooms.find(r=>r.id===id);
if(!room)return;
if(!confirm(`Delete "${room.name}"? Existing timetable records will remain stored but the room will disappear from the timetable.`))return;
room.active=false;
saveData("rooms",rooms);
renderRooms();
renderTimetable();
updateDashboard();
}
function renderSlots(){
const body=document.getElementById("slotsBody");
body.innerHTML="";
const sorted=[...slots].sort((a,b)=>a.start.localeCompare(b.start));
sorted.forEach((slot,index)=>{
const tr=document.createElement("tr");
tr.innerHTML=`<td>${index+1}</td><td>${formatTime(slot.start)}</td><td>${formatTime(slot.end)}</td><td><strong>${slotText(slot)}</strong></td><td><span class="status ${slot.active?"active":"inactive"}">${slot.active?"Active":"Inactive"}</span></td><td><button class="action-btn" onclick="editSlot(${slot.id})">✏ Edit</button><button class="action-btn" onclick="toggleSlot(${slot.id})">${slot.active?"Deactivate":"Activate"}</button><button class="action-btn delete" onclick="deleteSlot(${slot.id})">Delete</button></td>`;
body.appendChild(tr);
});
}
function openSlotModal(id=null){
document.getElementById("slotId").value=id||"";
document.getElementById("slotModalTitle").textContent=id?"Edit Time Slot":"Add Time Slot";
if(id){
const slot=slots.find(s=>s.id===id);
document.getElementById("slotStart").value=slot.start;
document.getElementById("slotEnd").value=slot.end;
document.getElementById("slotActive").checked=slot.active;
}else{
document.getElementById("slotStart").value="";
document.getElementById("slotEnd").value="";
document.getElementById("slotActive").checked=true;
}
document.getElementById("slotModal").classList.add("show");
}
function editSlot(id){openSlotModal(id);}
function saveSlot(){
const id=Number(document.getElementById("slotId").value);
const start=document.getElementById("slotStart").value;
const end=document.getElementById("slotEnd").value;
const active=document.getElementById("slotActive").checked;
if(!start||!end){
alert("Please select both start and end time.");
return;
}
if(start>=end){
alert("End time must be after start time.");
return;
}
const duplicate=slots.some(s=>s.id!==id&&s.start===start&&s.end===end);
if(duplicate){
alert("This time slot already exists.");
return;
}
if(id){
const slot=slots.find(s=>s.id===id);
slot.start=start;
slot.end=end;
slot.active=active;
}else{
slots.push({id:uid(),start,end,active});
}
slots.sort((a,b)=>a.start.localeCompare(b.start));
saveData("slots",slots);
closeModal("slotModal");
renderSlots();
renderTimetable();
updateDashboard();
}
function toggleSlot(id){
const slot=slots.find(s=>s.id===id);
if(slot){
slot.active=!slot.active;
saveData("slots",slots);
renderSlots();
renderTimetable();
updateDashboard();
}
}
function deleteSlot(id){
const slot=slots.find(s=>s.id===id);
if(!slot)return;
if(!confirm(`Delete time slot "${slotText(slot)}"? Existing timetable records will remain stored but the slot will disappear from the timetable.`))return;
slot.active=false;
saveData("slots",slots);
renderSlots();
renderTimetable();
updateDashboard();
}
function changeSettingsTab(tab,button){
document.querySelectorAll(".settings-tab").forEach(b=>b.classList.remove("active"));
button.classList.add("active");
document.querySelectorAll(".settings-section").forEach(s=>s.classList.remove("active"));
document.getElementById(tab+"Settings").classList.add("active");
}
function updateDashboard(){
let total=0;
Object.values(timetable).forEach(day=>{
Object.values(day||{}).forEach(slot=>{
Object.values(slot||{}).forEach(record=>{
if(record&&!record.lunch)total++;
});
});
});
document.getElementById("totalClasses").textContent=total;
document.getElementById("totalRooms").textContent=rooms.filter(r=>r.active).length;
document.getElementById("totalSlots").textContent=slots.filter(s=>s.active).length;
}
function closeModal(id){
document.getElementById(id).classList.remove("show");
}
function escapeHTML(value){
return String(value||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
}
document.querySelectorAll(".modal-overlay").forEach(modal=>{
modal.addEventListener("click",e=>{
if(e.target===modal)modal.classList.remove("show");
});
});
document.addEventListener("keydown",e=>{
if(e.key==="Escape")document.querySelectorAll(".modal-overlay.show").forEach(m=>m.classList.remove("show"));
});
document.getElementById("todayDate").textContent=new Date().toLocaleDateString("en-IN",{weekday:"short",day:"2-digit",month:"short",year:"numeric"});
renderTimetable();
updateDashboard();