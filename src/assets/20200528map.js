import React from 'react'
import countries from '../countries'
import background from './background'
import Borders from '../countries/Borders'
import Australia from '../countries/Australia'
import India from '../countries/India'
import China from '../countries/China'
import SolomonIl from '../countries/SolomonIl'
import Bulgaria from '../countries/Bulgaria'
import Azerbaijan from '../countries/Azerbaijan'
import Belgium from '../countries/Belgium'
import Benin from '../countries/Benin'
import DRC from '../countries/DRC'
import Georgia from '../countries/Georgia'
import Germany from '../countries/Germany'
import Indonesia from '../countries/Indonesia'
import Japan from '../countries/Japan'
import Mexico from '../countries/Mexico'
import Peru from '../countries/Peru'
import PapaNewGuinea from '../countries/PapaNewGuinea'
import UK from '../countries/UK'
import USA from '../countries/USA'
import USSR from '../countries/USSR'
import Austria from '../countries/Austria'


export default function Svg20200528Map({ view = [1165, 0, 6975, 4650], setView }) {
  return (
    <svg viewBox={view}>
      <g>
        {background}
        <USSR onClick={() => setView(countries.USSR.view)}/>
        <India onClick={() => alert('India')}/>
        <China onClick={() => alert('China')}/>
        <SolomonIl onClick={() => alert('SI')}/>
        <Bulgaria onClick={() => alert('Bulgaria')}/>
        <Azerbaijan onClick={() => alert('AZ')}/>
        <Peru onClick={() => alert('Peru')}/>
        <Georgia onClick={() => alert('Georgia')}/>
        <Belgium onClick={() => alert('Belgium')}/>
        <Japan onClick={() => alert('Japan')}/>
        <PapaNewGuinea onClick={() => alert('PNG')}/>
        <USA onClick={() => alert('USA')}/>
        <Mexico onClick={() => alert('Mexico')}/>
        <Australia onClick={() => alert('Aus')}/>
        <Indonesia onClick={() => alert('Indonesia')}/>
        <DRC onClick={() => alert('DRC')}/>
        <Benin onClick={() => alert('Benin')}/>
        <Austria onClick={() => alert('Austria')}/>
        <UK onClick={() => alert('UK')}/>
        <Germany onClick={() => alert('Germany')}/>
      </g>
      <Borders/>
    </svg>
  )
}
