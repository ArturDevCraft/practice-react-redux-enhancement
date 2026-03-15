import React, { useEffect, useRef, useState } from 'react';

const withPopup = (opacity = 1.0, background = 'none') => {
	return (WrappedComponent) => {
		return () => {
			const dialog = useRef();
			const [opened, setOpened] = useState(true);
			useEffect(() => {
				opened ? dialog.current.showModal() : dialog.current.close();
			}, [opened]);

			const closeHandler = () => {
				setOpened(false);
			};

			const dialogStyles = { backgroundColor: background, opacity: opacity };
			const wrapperStyles = { display: 'grid' };

			return (
				<>
					<dialog ref={dialog} style={dialogStyles}>
						<div style={wrapperStyles}>
							<WrappedComponent />
							<button onClick={closeHandler}>Ok</button>
						</div>
					</dialog>

					{!opened && <WrappedComponent />}
				</>
			);
		};
	};
};

export default withPopup;
