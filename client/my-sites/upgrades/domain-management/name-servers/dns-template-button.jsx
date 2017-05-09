/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Button from 'components/button';

class DnsTemplateButton extends Button {
	onClick = () => {
		this.props.onTemplateClick( this.props.name );
	};

	render() {
		const { name } = this.props;

		return (
				<Button
					key={ `dns-templates-button-${ name }` }
					onClick={ this.onClick }
				>
					{ name }
				</Button>
		);
	}
}

export default DnsTemplateButton;
