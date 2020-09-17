import { getCount } from './bill';
import * as path from 'path';
import * as fs from 'fs';
import Vue from "vue";


export function getName( ) : string
{
  const dirPath = 'ab/xxx' ;
  const filePath = path.join(dirPath, 'abc') ;
  const nx = getCount( ) ;
  return 'abc' + nx.toString( ) ;
}
