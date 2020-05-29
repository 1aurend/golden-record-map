import React from 'react'
import countries from '../countries'
import background from '../assets/background'
import Borders from '../countries/Borders'
import Australia from '../countries/Australia'
import India from '../countries/India'
import China from '../countries/China'
import SolomonIl from '../countries/SolomonIl'
import Bulgaria from '../countries/Bulgaria'
import Azerbaijan from '../countries/Azerbaijan'
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
        <USSR onClick={setView}/>
        <India onClick={setView}/>
        <China onClick={setView}/>
        <SolomonIl onClick={setView}/>
        <Bulgaria onClick={setView}/>
        <Azerbaijan onClick={setView}/>
        <Peru onClick={setView}/>
        <Georgia onClick={setView}/>
        <Japan onClick={setView}/>
        <PapaNewGuinea onClick={setView}/>
        <USA onClick={setView}/>
        <Mexico onClick={setView}/>
        <Australia onClick={setView}/>
        <Indonesia onClick={setView}/>
        <DRC onClick={setView}/>
        <Benin onClick={setView}/>
        <Austria onClick={setView}/>
        <UK onClick={setView}/>
        <Germany onClick={setView}/>
      </g>
      <Borders/>
    </svg>
  )
}
