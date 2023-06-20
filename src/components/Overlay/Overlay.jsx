
import PageHeader from './PageHeader/PageHeader'
import PageFooter from './PageFooter/PageFooter'
import { Outlet } from 'react-router-dom'

function Overlay({toggleTheme, isChecked}) {
	return (
		<>
			<PageHeader toggleTheme={toggleTheme} isChecked={isChecked} />
			
				<Outlet />

			<PageFooter />
		</>
	)
}

export default Overlay