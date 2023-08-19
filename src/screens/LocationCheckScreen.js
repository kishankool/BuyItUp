// LocationBasedShoppingApp.js
import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import RecipeListScreen from './RecipeListScreen';
const LocationCheckScreen = ({navigation}) => {
  const [userLocation, setUserLocation] = useState({latitude: '',longitude :''});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocationAsync();
  }, []);

  const getLocationAsync = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        console.log('location',location);
        // r
        userLocation.latitude = location.coords.latitude;
        userLocation.longitude = location.coords.longitude;
        console.log('locationafter',userLocation);
        setLoading(false); // User location received, set loading to false
      } else {
        console.log('Location permission denied');
        setLoading(false); // Location permission denied, set loading to false
      }
    } catch (error) {
      console.error('Error getting location:', error);
      setLoading(false); // Error occurred, set loading to false
    }
  };

  const isWithinRegion = (location) => {
    // Define the latitude and longitude boundaries for each region
    // Define the area codes for each region
    const upBounds = {
      minLat: 23.6345,
      maxLat: 31.4665,
      minLng: 77.0879,
      maxLng: 84.0012,
    };
    return (
      userLocation.latitude >= upBounds.minLat &&
      userLocation.latitude <= upBounds.maxLat &&
      userLocation.longitude >= upBounds.minLng &&
      userLocation.longitude <= upBounds.maxLng
    );
  };

  if (loading) { 
    return <View style={styles.centered}><Text style={styles.title}>Loading location...</Text></View>;
  }

  if (!userLocation) {
    return <View style={styles.centered}><Text style={styles.title}>Could not retrieve location</Text></View>;
  }

  const region = isWithinRegion(userLocation);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={styles.centered}><Text style={styles.title}>Loading location...</Text></View>
      ) : region ? (
        navigation.navigate("RecipeList")
      ) : (
        <View style={styles.centered}><Text style={styles.title}>You are not within the  location...</Text></View>
      )}
    </View>
  );
};

export default LocationCheckScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
});