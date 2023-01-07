import database from './firebase';
import {useState,useEffect} from 'react';
import './App.css'


const Firestore = () => {
	const [name , Setname] = useState("");
	const [age , Setage] = useState("");
	const [course , Setcourse] = useState("");
	const [info , setInfo] = useState([]);

	const displayData = ()=> {
		database.ref("user").get().then((querySnapshot) => {
			// console.log("querySnapshot",querySnapshot);
			querySnapshot.forEach(element => {
				var data = element.val();
				setInfo(arr => [...arr , data]);
				 
			});	
		})
	
	}
	useEffect(() => {
		displayData();
		
		
	  },[]);
	const sub = (e) => {
		alert("haii");
		e.preventDefault();
		database.ref('user').push({
			Nane: name,
			Age: age,
			CourseEnrolled: course
		}).then((docRef) => {
			displayData();
			
			
		}).catch((error) => {
			console.error("Error adding document: ", error);
		});
	}

	return (
		<div>
			<center>
				<form style={{marginTop:"200px" }}
				onSubmit={(event) => {sub(event)}}>
					<input type="text" placeholder="your name"
					onChange={(e)=>{Setname(e.target.value)}} />
					<br/><br/>
					<input type="number" placeholder="your age"
					onChange={(e)=>{Setage(e.target.value)}}/>
					<br/><br/>
					<input type="text" placeholder="Course Enrolled"
					onChange={(e)=>{Setcourse(e.target.value)}}/>
					<br/><br/>
					<button type="submit">Submit</button>
				</form>

				<table>
				<thead>
					<tr>
					<th> Name</th>
					<th>AGE</th>
					<th>COURSE</th>
					</tr>
				</thead>
				<tbody>
					
				{info.map(data => {
					console.log("data",data);
				return (
				<tr>
					<td>{data.Nane}</td>
					<td>{data.Age}</td>
					<td>{data.CourseEnrolled}</td>

				</tr>)
             
				})}
		
				</tbody>
				</table>
			</center>
		</div>
	);
}

export default Firestore;
