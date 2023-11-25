
let myforms=document.querySelector("form");
let input1=document.getElementById("name");
let input2=document.getElementById("doctor_id")
let input3=document.getElementById("specialization");
let input4=document.getElementById("experience")
let input5=document.getElementById("email");
let input6=document.getElementById("mobile");
let tbody=document.querySelector('tbody')

let alldata=[]

myforms.addEventListener('submit',function(e){
    e.preventDefault()

    let obj={}
    obj.doctorName=input1.value
    obj.doctorId=input2.value
    obj.specialization=input3.value
    obj.experience=input4.value
    obj.email=input5.value
    obj.mobile=input6.value

    alldata.push(obj)

    tbody.innerHTML=null

    alldata.map((ele)=>{
        let row=document.createElement("tr")
        let td1=document.createElement("td1")
        let td2=document.createElement("td2")
        let td3=document.createElement("td3")
        let td4=document.createElement("td4")
        let td5=document.createElement("td5")
        let td6=document.createElement("td6")

        td1.innerText=ele.doctorName
        td2.innerText=ele.doctorId
        td3.innerText=ele.specialization
        td4.innerText=ele.experience
        td5.innerText=ele.email
        td6.innerText=ele.mobile



        row.append(td1,td2,td3,td4,td5,td6)
        tbody.append(row)
        console.log(tbody)
    })
})