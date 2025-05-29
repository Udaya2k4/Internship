
import React from "react";
function Addstudent(){
    return(
        <div>
            <form>
              Student Name: <input type="text" name="name"></input><br></br>
              Student Id: <input type="text" name="eid"></input><br></br>
                Email: <input type="email" name="eemail"></input><br></br>
                 contact: <input type="tel" name="econtact"></input><br></br>
                 EAMCET Rank:<input type="number" name="num"></input> <br></br>
                 Gender:<br></br>
                 <input type="radio" name="gender"></input>Male
                 <input type="radio" name="gender"></input>Female<br></br>
                 Contact:<input type="tel" name="contact"></input><br></br>
                 Address:<input type="text" name="addr"></input><br></br>
                 Photo Upload:<input type="file" name="photo"></input><br></br>
                <input type="submit" name="submit"value="Save Record"></input>
                <input type="reset" name="reset" value="reset"></input><br></br>
            </form>
        </div>
    )
}
export default Addstudent;