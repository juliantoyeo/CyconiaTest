import React from 'react'

const styles = {
	checkBoxContainer: {
		width: '20%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	}
}

const SearchForm = (props) => {
	const { onSubmit, onChange, form } = props

	return (
		<div className={'formContainer'}>
			<span className={'header'}>Bienvenue sur le système de réservation!</span>
				<form style={styles.form} onSubmit={onSubmit} key={'nameForm'} className={'standardForm'}>
					<label style={{ width : '10%' }}>
						Votre Nom
					</label>
					<input
						name={'name'}
						className={'inputField'}
						type={'text'}
						onChange={(e) => onChange(e, 'name')}
						autoComplete='off'
						required
					/>
					<label style={{ width : '10%' }}>
						Date
					</label>
					<input
						type={'date'}
						id={'start'}
						name={'date'}
						className={'inputField'}
						onChange={(e) => onChange(e, 'date')}
						value={form.date}
					>
					</input>
					<label style={{ width : '100%' }}>
						Heure (Durée: 1 heure chaque réservation)
					</label>
					<input
						name={"time"}
						className={'inputField'}
						onChange={(e) => onChange(e, "time")}
						type={"text"}
						pattern={"[0-1][0-9]:[0][0]"}
						title={"Entre 09:00 - 17:00"}
						autoComplete='off'
						value={form.time}
						required
					/>
					<label style={{ width : '10%' }}>
						Capacity
					</label>
					<input
						name={'capacity'}
						className={'inputField'}
						type={'number'}
						onChange={(e) => onChange(e, 'capacity')}
						value={form.capacity}
						required
						step={'1'}
						min={'1'}
						max={'26'}
					/>
					<label style={{ width : '10%' }}>
						Equipement
					</label>
					<div style={styles.checkBoxContainer}>
						<input
							type={"checkbox"}
							onChange={(e) => onChange(e, "equipment")}
							value={'tv'}
						/> Tv
						<input
							type={"checkbox"}
							onChange={(e) => onChange(e, "equipment")}
							value={'projector'}
						/> Retro Projecteur
					</div>
					<button style={{ width: '15%' }} className={'formButton'} type={'submit'} text={'Play'} > Recherche </button>
				</form>
		</div>
	)
}

export default SearchForm