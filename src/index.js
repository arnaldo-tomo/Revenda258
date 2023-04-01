import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, HStack, Button, Text, Heading, VStack, Box, FlatList, AspectRatio, Stack, Image, Avatar, Spacer, ScrollView, Center } from 'native-base';
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SimpleCarousel, Banner } from 'react-native-simple-banner-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Index() {
    // const { width, height } = Dimensions.get('window');
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujitha Mathur",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        timeStamp: "6:22 PM",
        recentText: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }];
    return (
        <NativeBaseProvider>

            <HStack pt={'7'} justifyContent={'space-between'} justifyItems={'center'} pl={'2'} pr={'2'} backgroundColor={'#fff'}>
                <Image w={'100'} h={'50'} source={require('../assets/images/logofull.png')} alt="logo" />
                <HStack justifyContent={'space-between'} justifyItems={'center'} >
                    <Ionicons name={'menu-outline'} size={30} color={'blue'} />
                    <Ionicons name={'power-outline'} size={30} color={'blue'} />

                </HStack>
            </HStack>
            <View style={styles.container}>
                <View style={{
                    paddingVertical: 12,
                    width: '100%',
                    backgroundColor: '#fff',
                }}>
                    <SimpleCarousel
                        data={[{
                            title: 'Hokkaido',
                            source: require('../assets/images/1.png'),
                        },
                        {
                            title: 'Tokyo',
                            source: require('../assets/images/1.png'),
                        },
                        {
                            title: 'Osaka',
                            source: require('../assets/images/1.png'),
                        },
                        {
                            title: 'Kyoto',
                            source: require('../assets/images/1.png'),
                        },
                        {
                            title: 'Shimane',
                            source: require('../assets/images/1.png'),
                        }
                        ]}
                        renderItem={(props, i, width) => {
                            return (
                                <Banner id={`${props.title}_${i}`} source={props.source} width={width} onPress={(id) => console.log(`${id} was tapped.`)} />
                            )
                        }}
                    />
                </View>
                <StatusBar translucent={true} />
            </View>


            <HStack justifyContent={'space-between'} justifyItems={'center'} bgColor={'white'} pl={4} pr={4}>
                <Button bgColor={'blue.100'} color={'blue.200'} size={'55'} borderRadius={30}>
                    <Ionicons name={'menu-outline'} size={30} color={'blue'} />
                </Button>
                <Button bgColor={'blue.100'} size={'55'} borderRadius={30}>
                    <Ionicons name={'star-outline'} size={30} color={'blue'} />
                </Button>
                <Button size={'55'} bgColor={'blue.100'} borderRadius={30}>
                    <Ionicons name={'gift-outline'} size={30} color={'blue'} />
                </Button>
                <Button size={'55'} bgColor={'blue.100'} borderRadius={30}>
                    <Ionicons name={'people-outline'} size={30} color={'blue'} />
                </Button>
            </HStack>
            <HStack justifyContent={'space-between'} justifyItems={'center'} bgColor={'white'} pl={4} pr={6}>
                <Text color={'blue.400'}>Categorias</Text>
                <Text color={'blue.400'}>Favoritos</Text>
                <Text color={'blue.400'}>Recente</Text>
                <Text color={'blue.400'}>Pessoas</Text>
            </HStack>
            <HStack bgColor={'white'} p={4}>
                <Heading fontWeight={'black'} >Vendas</Heading>
            </HStack>

            <ScrollView>
                <Stack pl={'2'} pr={'2'} bgColor={'white'} alignItems="center" justifyContent={'space-between'} >
                    <FlatList numColumns={2} showsHorizontalScrollIndicator={false} horizontal={false} data={data} renderItem={({ item }) =>

                        <TouchableOpacity>

                            <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                            }} _web={{
                                shadow: 2,
                                borderWidth: 0
                            }} _light={{
                                backgroundColor: "gray.50"
                            }}>
                                <Box>
                                    <AspectRatio w="40">
                                        <Image source={{
                                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                        }} alt="image" />
                                    </AspectRatio>
                                    <Center bg="violet.500" _dark={{
                                        bg: "violet.400"
                                    }} _text={{
                                        color: "warmGray.50",
                                        fontWeight: "700",
                                        fontSize: "xs"
                                    }} position="absolute" bottom="0" px="3" py="1.5">
                                        PHOTOS
                                    </Center>
                                </Box>
                                <Stack p="4" space={3}>
                                    <Stack space={2}>
                                        <Heading size="md" ml="-1">
                                            The Garden City
                                        </Heading>
                                        <Text fontSize="xs" _light={{
                                            color: "violet.500"
                                        }} _dark={{
                                            color: "violet.400"
                                        }} fontWeight="500" ml="-0.5" mt="-1">
                                            The Silicon Valley of India.
                                        </Text>
                                    </Stack>
                                    {/* <Text fontWeight="400">
                                                Bengaluru (also called Bangalore) is the center of India's high-tech
                                                industry. The city is also known for its parks and nightlife.
                                            </Text> */}
                                    <HStack alignItems="center" space={4} justifyContent="space-between">
                                        <HStack alignItems="center">
                                            <Text color="coolGray.600" _dark={{
                                                color: "warmGray.200"
                                            }} fontWeight="400">
                                                6 mins ago
                                            </Text>
                                        </HStack>
                                    </HStack>
                                </Stack>
                            </Box>

                        </TouchableOpacity>

                    } keyExtractor={item => item.id} />
                </Stack>
            </ScrollView>

        </NativeBaseProvider >

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',

    },
});