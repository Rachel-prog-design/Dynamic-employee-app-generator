function EmployeeCard({ employee }) {

  const { id, name, email, phone, website, company } = employee;

  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>ID:</strong> {id}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>
      <p><strong>Company:</strong> {company.name}</p>
    </div>

  import html2canvas from "html2canvas";
  import { useRef } from "react";

 function EmployeeCard({ employee }) {

  const cardRef = useRef();

  const downloadCard = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${employee.name}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const { id, name, email, phone, website, company } = employee;

  return (
    <div className="card" ref={cardRef}>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Company: {company.name}</p>

      <button onClick={downloadCard}>Download Card</button>
    </div>
  );
}

export default EmployeeCard;  
  );
}

export default EmployeeCard;