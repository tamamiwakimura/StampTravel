import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ViewAllPageScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                {/* Menu Icon */}
                <FontAwesome name="bars" size={24} color="black" />

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <Feather
                        name="search"
                        size={20}
                        color="black"
                        style={styles.searchIcon}
                    />
                    <Text style={styles.searchInput}>Search</Text>
                </View>

                {/* Notification and User Icon */}
                <View style={styles.actions}>
                    <FontAwesome name="bell" size={24} color="black" />
                    <FontAwesome
                        name="user"
                        size={24}
                        color="black"
                        style={{ marginLeft: 15 }}
                    />
                </View>
            </View>

            {/* Special for you Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Special for you</Text>
                <View style={styles.gridItem}>
                    {/* Satun */}
                    <Image
                        source={{
                            uri: 'https://www.takemetour.com/amazing-thailand-go-local/wp-content/uploads/2018/03/Things-to-do-in-Satun-Thailand-The-Loves-Gate-on-Koh-Kai.jpg',
                        }}
                        style={styles.gridImage}
                    />
                    <View style={styles.textSection}>
                        <Text style={styles.gridText}>Satun</Text>
                        <Text style={styles.cardLocation}>159 สถานที่ท่่องเที่ยว</Text>
                    </View>
                </View>

                <View style={styles.gridItem}>
                    {/* Songkhla */}
                    <Image
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Songkhla_Laem_Samila.jpg',
                        }}
                        style={styles.gridImage}
                    />
                    <View style={styles.textSection}>
                        <Text style={styles.gridText}>Songkhla</Text>
                        <Text style={styles.cardLocation}>309 สถานที่ท่่องเที่ยว</Text>
                    </View>
                </View>

                <View style={styles.gridItem}>
                    {/* chiang mai */}
                    <Image
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg/1200px-0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg',
                        }}
                        style={styles.gridImage}
                    />
                    <View style={styles.textSection}>
                        <Text style={styles.gridText}>Chiang Mai</Text>
                        <Text style={styles.cardLocation}>509 สถานที่ท่่องเที่ยว</Text>
                    </View>
                </View>

                <View style={styles.gridItem}>
                    {/* chiang Rai */}
                    <Image
                        source={{
                            uri: 'https://warmcheaptrips.com/wp-content/uploads/2023/01/Cosa-vedere-a-Chiang-Rai.jpeg',
                        }}
                        style={styles.gridImage}
                    />
                    <View style={styles.textSection}>
                        <Text style={styles.gridText}>Chiang Rai</Text>
                        <Text style={styles.cardLocation}>329 สถานที่ท่่องเที่ยว</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
    },
    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        padding: 5,
        flex: 1,
        marginHorizontal: 15,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        color: '#777',
    },
    searchIcon: {
        marginLeft: 10,
    },
    actions: {
        flexDirection: 'row',
    },
    section: {
        marginVertical: 20,
        paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardLocation: {
        fontSize: 14,
        color: '#777',
    },
    gridItem: {
        flexDirection: 'row', // Arrange items in a row (Text/Icon on left,
        alignItems: 'center', // Vertically align items
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
        marginRight: 15, // Add margin between cards
        padding: 10, // Add padding around the content
        marginVertical: 10,
    },
    textSection: {
        flex: 1,
        flexDirection: 'column', // Stack text and icon vertically
        alignItems: 'flex-start', // Align text and icon to the left
        marginRight: 10, // Space between text and image
        justifyContent: 'center',
    },
    gridText: {
        padding: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    gridImage: {
        width: 150, // Set image width
        height: 100, // Set image height
        borderRadius: 10, // Optional: Rounded corners for the image
        marginRight: 15,
    },
});
