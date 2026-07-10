const students = [

{
id:1,
name:"Rahul",
course:"BCA",
attendance:"92%"
},

{
id:2,
name:"Aachal",
course:"MCA",
attendance:"96%"
},

{
id:3,
name:"Anjali",
course:"BTech",
attendance:"87%"
},

{
id:4,
name:"Rohit",
course:"BCA",
attendance:"90%"
}

];

const StudentTable=()=>{

return(

<div className="bg-white rounded-xl shadow-lg p-5">

<h2 className="text-2xl font-bold mb-5">

Recent Students

</h2>

<table className="w-full">

<thead>

<tr className="bg-blue-600 text-white">

<th className="p-3">Name</th>

<th>Course</th>

<th>Attendance</th>

</tr>

</thead>

<tbody>

{

students.map((student)=>(

<tr
key={student.id}
className="border-b text-center"
>

<td className="p-3">

{student.name}

</td>

<td>

{student.course}

</td>

<td>

{student.attendance}

</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}

export default StudentTable;