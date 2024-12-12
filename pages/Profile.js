import React, { useState } from 'react';
import { 
  StatusBar, TextInput, View, Text, TouchableOpacity, 
  StyleSheet, ScrollView, Dimensions, SafeAreaView 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Platform } from 'react-native';
import Navbar from '../components/Navbar';

const { width } = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const options = [
    { icon: "user-cog", title: "Accounts Center", description: "Manage your account settings", route: "AccountCenter" },
    { icon: "info-circle", title: "About", route: "About" },
    { icon: "file-signature", title: "Terms of Service", route: "TermsOfUse" },
  ];

  const filteredOptions = options.filter(option =>
    option.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderOption = ({ icon, title, description, route }) => (
    <TouchableOpacity
      key={title}
      style={styles.option}
      onPress={() => navigation.navigate(route)}>
      <Icon name={icon} size={22} color="#1F2937" style={styles.optionIcon} />
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionTitle}>{title}</Text>
        {description && <Text style={styles.optionDescription}>{description}</Text>}
      </View>
      <Icon name="chevron-right" size={18} color="#6B7280" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#F3F4F6"
        translucent={Platform.OS === 'android'}
      />

      <View style={styles.container}>
        <ScrollView 
          style={styles.scrollContainer} 
          contentContainerStyle={{ paddingBottom: 100 }}>
          <Text style={styles.header}>Profile</Text>

          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
            <TextInput
              placeholder="Search Profile"
              placeholderTextColor="#9CA3AF"
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>

          {filteredOptions.length > 0 ? (
            filteredOptions.map(option => renderOption(option))
          ) : (
            <Text style={styles.noResultsText}>No matches found</Text>
          )}

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate('Login')}>
            <Icon name="sign-out-alt" size={22} color="#E11D48" style={styles.logoutIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>

        <Navbar style={styles.navbar} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#E5E7EB',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
    color: '#111827',
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: '#FAFAFA',
    elevation: 2,
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  optionTitle: {
    fontSize: 18,
    color: '#1F2937',
    fontWeight: '500',
  },
  optionDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  noResultsText: {
    fontSize: 16,
    color: '#9CA3AF',
    textAlign: 'center',
    marginTop: 30,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 25,
    backgroundColor: '#FEF2F2',
    elevation: 2,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    fontSize: 18,
    color: '#E11D48',
    fontWeight: '600',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: width,
  },
});

export default Profile;
