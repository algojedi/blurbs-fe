import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/theme-provider';

export const NavigationBar = () => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container'>
				<a className='navbar-brand' href='#'>
					BLURBS
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link' to='/'>
								My Posts
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/profile'>
								Profile
							</Link>
						</li>
					</ul>
				</div>
				<button type='button' className='btn btn-primary' onClick={toggleTheme}>
					<i className={`bi bi-toggle-${isDark ? 'on' : 'off'}`}></i> Toggle theme
				</button>
			</div>
		</nav>
	);
};

// const MainComponent = () => {
// 	return (
// 		<div className='app' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
// 			<NavigationBar />
// 			<h1 className='h2 text-center'>Main Component</h1>
// 			<div className='text'>It's a {isDark ? 'Dark' : 'Light'} theme</div>
// 			<button type='button' onClick={toggleTheme}>
// 				Toggle theme
// 			</button>
// 		</div>
// 	);
// }
