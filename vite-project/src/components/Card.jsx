const Card = (props) => {
	return (
		<div className="card" class="col-md-3">
			<img src={props.img} className="card-img-top" alt={props.alt} />
			<div className="card-body">
				<a className="card-title">{props.tittle}</a>
				<p className="card-text">
                    <h3>{props.nombre}</h3>
                    <div>{props.detalle}</div>
				</p>
				<button class="btn btn-danger btn-lg ">
					<div>{props.boton}</div>
				</button>
			</div>
		</div>
	);
};

export default Card;