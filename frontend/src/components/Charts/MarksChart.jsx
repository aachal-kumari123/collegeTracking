import {
Chart as ChartJS,
CategoryScale,
LinearScale,
LineElement,
PointElement,
Tooltip,
Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
LineElement,
PointElement,
Tooltip,
Legend
);

const MarksChart=()=>{

const data={

labels:["Sem1","Sem2","Sem3","Sem4"],

datasets:[
{
label:"Average Marks",

data:[70,78,82,91]
}
]

}

return(

<div className="bg-white p-5 rounded-xl shadow-lg">

<h2 className="font-bold text-xl mb-4">

Performance

</h2>

<Line data={data}/>

</div>

)

}

export default MarksChart;