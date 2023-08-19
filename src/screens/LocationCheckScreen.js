import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import RecipeListScreen from './RecipeListScreen';


const LocationCheckScreen = () => {
    const [userLocation, setUserLocation] = useState(null);
  
    useEffect(() => {
      getLocationAsync();
    }, []);
  
    const getLocationAsync = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const location = await Location.getCurrentPositionAsync({});
          setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        } else {
          console.log('Location permission denied');
        }
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };
  
    const isWithinRegion = (location) => {
      // Define the latitude and longitude boundaries for each region
      const upBounds = {
        minLat: 23.6345,
        maxLat: 31.4665,
        minLng: 77.0879,
        maxLng: 84.0012,
      };
      const rjBounds = {
        minLat: 23.0396,
        maxLat: 30.1105,
        minLng: 68.0410,
        maxLng: 77.5848,
      };
      const wbBounds = {
        minLat: 21.5422,
        maxLat: 27.3251,
        minLng: 85.7800,
        maxLng: 89.8712,
      };
  
      // Check if the user's location is within the boundaries of any region
      return (
        (location.latitude >= upBounds.minLat && location.latitude <= upBounds.maxLat) &&
        (location.longitude >= upBounds.minLng && location.longitude <= upBounds.maxLng)
      ) || (
        (location.latitude >= rjBounds.minLat && location.latitude <= rjBounds.maxLat) &&
        (location.longitude >= rjBounds.minLng && location.longitude <= rjBounds.maxLng)
      ) || (
        (location.latitude >= wbBounds.minLat && location.latitude <= wbBounds.maxLat) &&
        (location.longitude >= wbBounds.minLng && location.longitude <= wbBounds.maxLng)
      );
    };
  
    return (
      <View style={{ flex: 1 }}>
        {userLocation && isWithinRegion(userLocation) ? (
          <RecipeListScreen userLocation={userLocation} />
        ) : (
          <Text>Location is not within the specified regions</Text>
        )}
      </View>
    );
  };
  
  export default LocationCheckScreen;
  