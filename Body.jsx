import { returnStatement } from '@babel/types';
import React from 'react';
import Card from './Card';
import Cdata from './Cdata';

function bootcard(val){
    return (
    <Card
    imgsrc={val.imgsrc}
    ctitle={val.ctitle}
     />
     )
}

function Body() {
    return (
        <>
        <body>
          {Cdata.map(bootcard)}
        </body>
        </>
    );
}

export default Body;
