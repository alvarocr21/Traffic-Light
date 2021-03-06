import React, { useState } from "react";

//create your first component
export function Trafico() {
	let [colorLuz1, setColorLuz1] = useState("");
	let [colorLuz2, setColorLuz2] = useState("");
	let [colorLuz3, setColorLuz3] = useState("");

	function cambio() {
		if (colorLuz1 == "") {
			setColorLuz1("bg-success");
			setColorLuz2("bg-gradient-warning");
			setColorLuz3("bg-gradient-danger");
		} else if (colorLuz1 == "bg-success") {
			setColorLuz1("bg-gradient-success");
			setColorLuz2("bg-warning");
			setColorLuz3("bg-gradient-danger");
		} else if (colorLuz2 == "bg-warning") {
			setColorLuz1("bg-gradient-success");
			setColorLuz2("bg-gradient-warning");
			setColorLuz3("bg-danger");
		} else if (colorLuz3 != "bg-danger") {
			setColorLuz1("bg-gradient-success");
			setColorLuz2("bg-warning");
			setColorLuz3("bg-danger");
		} else {
			setColorLuz1("bg-success");
			setColorLuz2("bg-gradient-warning");
			setColorLuz3("bg-gradient-danger");
		}
	}
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-3">
					<div className="card align-items-center bg-dark">
						<div
							className={
								"mt-3 card-body border border-success rounded-circle " +
								colorLuz1
							}></div>
						<div
							className={
								"mt-3 card-body border border-warning rounded-circle " +
								colorLuz2
							}></div>
						<div
							className={
								"my-3 card-body border border-danger rounded-circle " +
								colorLuz3
							}></div>
					</div>
				</div>
			</div>
			<button className="btn btn-primary" onClick={cambio}>
				Cambiar Luz
			</button>
		</div>
	);
}
