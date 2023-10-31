import React from "react";

const Card = ({students}) => {
  console.log(students);
  return (
    <div>
      <ul>
          {students.map(student => <li key={student.id}>
              {student.id} - {student.name} - {student.grade}
          </li>)}
      </ul>
    </div>
  );
};

export default Card;
