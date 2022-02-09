import React from 'react'

export const Card = ({ personaje }) => {
	return (
		<section className='personaje'>
			<div className='personaje_personaje-header'>
				<div className='personaje_personaje-header_estado'>
					<span className={personaje.status}></span>
					<h4>{personaje.status}</h4>
				</div>
			</div>

			<div className='personaje_personaje-body'>
				<figure>
					<img src={personaje.image} alt={personaje.name} />
				</figure>

				<h2>{personaje.name}</h2>
				<p>
					{personaje.species} <span>-</span> {personaje.gender}
				</p>
			</div>
		</section>
	)
}