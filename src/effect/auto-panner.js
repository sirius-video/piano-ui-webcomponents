import { LitElement, html } from '@polymer/lit-element'
import { ToneEffect } from './effect'

class ToneAutoPanner extends ToneEffect {

	constructor(){
		super()
		this.label = 'AutoPanner'
	}

	renderAttributes(){
		return html`
			<tone-slider 
				label="Frequency"
				attribute="frequency"
				min="0.1"
				max="20"
				units="hz"
				value="1"></tone-slider>
			<tone-slider 
				label="Depth"
				attribute="depth"
				min="0"
				max="1"
				value="0.5"></tone-slider>
			<tone-oscillator-type
				attribute="type"
				label="Type"
				nocustom></tone-oscillator-type>
		`
	}
	
}

customElements.define('tone-auto-panner', ToneAutoPanner)
