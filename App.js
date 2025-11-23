import React from 'react';
import {
    SectionList,
    Image,
    ToastAndroid,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


const runningPlacesData = [
    {
        title: 'Central Region',
        color: '#4CAF50',
        data: [
            {
                key: 'MacRitchie Reservoir',
                pic: "https://www.nparks.gov.sg/images/default-source/parks-img/central-catchment-nature-reserve/central-catchment-nature-reserve-hiking-hero-boardwalk.jpg",
                location: 'Bishan/Novena',
            },
            {
                key: 'Upper Peirce Reservoir',
                pic: "https://www.nparks.gov.sg/images/default-source/parks-img/upper-peirce-reservoir-park/upper-pierce-reservoir-park-hero-stones.jpg",
                location: 'Upper Thomson Road',
            },
        ]
    },
    {
        title: 'Eastern Region',
        color: '#FF9800',
        data: [
            {
                key: 'Bedok Reservoir',
                pic: "https://www.nparks.gov.sg/images/default-source/parks-img/bedok-reservoir-park/bedok-reservoir-park-hero-sunset.jpg",
                location: 'Bedok',
            },
            {
                key: 'Serangoon Reservoir',
                pic: "https://live.staticflickr.com/3069/5847487747_fda9c193ae_b.jpg",
                location: 'Hougang/Punggol',
            },
        ]
    },
    {
        title: 'Northern Region',
        color: '#2196F3',
        data: [
            {
                key: 'Kranji Reservoir',
                pic: "https://www.nparks.gov.sg/images/default-source/parks-img/kranji-reservoir-park/kranji-reservoir-park-hero-aerial.jpg", // Placeholder image for Kranji
                location: 'Kranji',
            },
            {
                key: 'Lower Seletar Reservoir',
                pic: "https://www.nparks.gov.sg/images/default-source/parks-img/lower-seletar-reservoir-park/lower-seletar-reservoir-park-heritage-bridge.jpg",
                location: 'Yishun',
            },
        ]
    },
    {
        title: 'Western Region',
        color: '#9C27B0',
        data: [
            {
                key: 'Jurong Lake Gardens',
                pic: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJjbGllbnQtdWtjYnZ6Nmxnc21ibXZ4ayJ9LCJwYXRoIjoicmFtYm9sbFwvZmlsZVwvTFZ5Vmk4UVMzV3ExRDI4TUR1Q3IucG5nIn0:ramboll:XkdXnMv_70-HuQYvFYH4SLTLe-TXCe0YL55RtnyriHs",
                location: 'Jurong East',
            },
            {
                key: 'Pandan Reservoir',
                pic: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/66/65/e1/teban-gardens.jpg?w=900&h=500&s=1",
                location: 'Jurong West',
            },
        ]
    },
];

// --- STYLESHEET ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    titleHeader: {
        padding: 15,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 6,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    itemSubText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    itemImage: {
        width: 100,
        height: 80,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    headerButton: {
        backgroundColor: '#00B0FF',
        padding: 18,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    headerButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '900',
    }
});


// --- HANDLER FUNCTION ---
const handler = (placeName, location) => {
    ToastAndroid.show(`Starting a run at ${placeName}! Located in: ${location}.`, ToastAndroid.SHORT);
};

// --- RENDER ITEM FUNCTION ---
const renderItem = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.itemCard}
            onPress={() => handler(item.key, item.location)} // Passing location
        >
            <Image
                source={{ uri: item.pic }}
                style={styles.itemImage}
            />
            <View style={styles.textContainer}>
                <Text style={styles.itemText}>{item.key}</Text>
                {/* Displaying Location instead of Trail Length */}
                <Text style={styles.itemSubText}>Location: {item.location}</Text>
            </View>
        </TouchableOpacity>
    );
};

// --- MAIN APP COMPONENT ---
const App = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.headerButton}
                onPress={() => ToastAndroid.show('Ready to hit the trails!', ToastAndroid.SHORT)}
            >
                <Text style={styles.headerButtonText}>
                    PLACES TO RUN IN SG
                </Text>
            </TouchableOpacity>

            {/* SECTION LIST */}
            <SectionList
                sections={runningPlacesData}
                keyExtractor={(item, index) => item.key + index}
                renderItem={renderItem}
                renderSectionHeader={({ section }) => (
                    <Text style={[styles.titleHeader, { backgroundColor: section.color }]}>
                        {section.title}
                    </Text>
                )}
            />
        </View>
    );
};

export default App;