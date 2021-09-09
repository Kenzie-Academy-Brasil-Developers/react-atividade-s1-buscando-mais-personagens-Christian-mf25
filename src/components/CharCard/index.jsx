import "./style.css"

const CharCard = ({ item: { name, image, status } }) => {

	return (
		<section className={status}>

			<div id="cardPerson">
				<label className="name">{name}</label>
				<img
					src={image}
					alt={name}
					className="photo"
				/>
			</div>

		</section>

	)
}

export default CharCard