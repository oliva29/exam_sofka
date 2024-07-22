import React, { useState } from 'react';
import { Text } from 'react-native';
import { Image as ImageApp } from 'expo-image'; 
import { StyleSheet } from 'react-native';
import Div from '@/components/div';
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

interface PropsOtherPhoto {
  h: number,
  w: number,
  assetId?: any,
  base64?: any,
  duration?: any,
  exif?: any,
  rotation?: any,
  [key: string]: any;
}

export interface PropsPhoto extends PropsOtherPhoto {
  fileName: string,
  type: string,
  uri: string,
}

interface PropsImage extends PropsOtherPhoto {
  fileName?: string,
  type?: string,
  uri?: string,
  source: string 
}

export default function Image(props: PropsImage){
  const [error, setError] = useState(false)

  let imageStyle = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(220,220,220)',
      borderRadius: 20, height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: 15,
      fontWeight: '700',
      textAlign: 'center'
    }
  })
  return (
    <>
      {
        error ?
          <Div p={20} row style={imageStyle.container}>
            <Text style={imageStyle.text}>{'Imagen disponible con conexión a Internet'}.</Text>
          </Div>

          : <ImageApp
            {...props}
            source={props.source} 
            height={props.h}
            width={props.w}
            cachePolicy="none"
            onError={() => {
              setError(true)
            }}
            transition={500}
            placeholder={blurhash}
          />
      }
    </>

  );
} 