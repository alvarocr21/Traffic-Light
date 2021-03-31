import React, { useState } from "react";

//create your first component
export function Trafico() {
	let [colorLuz1, setColorLuz1] = useState("");
	let [colorLuz2, setColorLuz2] = useState("");
	let [colorLuz3, setColorLuz3] = useState("");

	function cambioRojo() {
		setColorLuz1("bg-gradient-success");
		setColorLuz2("bg-gradient-warning");
		setColorLuz3("bg-danger");
	}
	function cambioAmarillo() {
		setColorLuz1("bg-gradient-success");
		setColorLuz2("bg-warning");
		setColorLuz3("bg-gradient-danger");
	}
	function cambioVerde() {
		setColorLuz1("bg-success");
		setColorLuz2("bg-gradient-warning");
		setColorLuz3("bg-gradient-danger");
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
							}
							onClick={cambioVerde}></div>
						<div
							className={
								"mt-3 card-body border border-warning rounded-circle " +
								colorLuz2
							}
							onClick={cambioAmarillo}></div>
						<div
							className={
								"my-3 card-body border border-danger rounded-circle " +
								colorLuz3
							}
							onClick={cambioRojo}></div>
					</div>
				</div>
			</div>
		</div>
	);
}
