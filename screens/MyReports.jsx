// screens/MyReports.jsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useReports } from '../context/ReportContext';
import CustomButton from '../components/CustomButton';
import defaultProfile from '../assets/default_profile.png';

export default function MyReports() {
  const { reports, submitCompletion } = useReports();
  const currentUser = 'John Doe'; // replace with actual current user logic
  const myReports = reports.filter(r => r.createdBy === currentUser);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Reports</Text>
      {myReports.length === 0 ? (
        <Text style={styles.emptyText}>You have not submitted any reports.</Text>
      ) : (
        <FlatList
          data={myReports}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={item.image ? { uri: item.image } : defaultProfile} style={styles.thumbnail} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.small}>{item.category} • {new Date(item.createdAt).toLocaleString()}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                  <Text style={styles.small}>Status: {item.status}</Text>
                  {item.completionPhoto && <Text style={styles.small}>Completion proof uploaded</Text>}
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f1f5f9' },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  emptyText: { textAlign: 'center', marginTop: 40, color: '#64748b' },
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#e2e8f0' },
  cardTitle: { fontSize: 16, fontWeight: '700', marginBottom: 6 },
  cardDescription: { fontSize: 14, color: '#475569', marginBottom: 6 },
  thumbnail: { width: 80, height: 80, borderRadius: 8 },
  small: { fontSize: 12, color: '#475569' }
});
