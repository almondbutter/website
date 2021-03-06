import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import AddonCollection from 'Components/addons/addon-collection'
import AddonsNav from '../addons-nav'

@inject('addons')
@observer
class RecentAddonsPage extends Component {
	static propTypes = {
		addons: PropTypes.array.isRequired
	}

	render () {
		const { addons } = this.props
		return (
			<div>
				<AddonsNav />

				<main className='u-width-limiter'>
					<h1>Recently updated addons</h1>
					<AddonCollection addons={addons} />
				</main>
			</div>
		)
	}
}

export default RecentAddonsPage
