import { Dimensions, FlatList, Pressable, SafeAreaView,StyleSheet, Text, View, Image } from "react-native";



export function Estoque(){

    const ListHeaderComponent = () => {
        return (
          <View style={styles.center}>
            <Text style={styles.demoTitle}>Meu Estoque</Text>
          </View>
        );
      };
      
      const ListFooterComponent = () => {
        return (
          <View style={styles.center}>
            <Text style={styles.demoTitle}>Meu Estoque</Text>
          </View>
        );
      };
      
      const ListEmptyComponent = () => {
        return (
          <View style={styles.center}>
            <Text style={styles.demoTitle}>FlatList Empty</Text>
          </View>
        );
      };

    const CardComponent = ({item}) => {
        return (
          <Pressable
            style={styles.movieItem}
            >
            <Image
              style={styles.poster}
              source={{
                uri: item.img,
              }}
              
            />
            <View style={styles.movieDetails}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.quantidade}</Text>
              <Text style={styles.description}>{item.preco}</Text>
              <Text style={styles.description}>{item.tamanho}</Text>
            </View>
          </Pressable>
        );
      };

           const dataCarregada = [
            {
              title: 'Havaianas bordada com flor',
              quantidade: 'Quantidade: 25',
              preco: "R$ 49,90 ",
              tamanho: "Tamanho: 36,37,38,39 ",
              img: 'https://i.pinimg.com/736x/ca/58/a6/ca58a64e5ed02823228dbcd8d02f35c1.jpg',
            },
            
            {
              title: 'Havaianas bordada com pérolas',
              quantidade: 'Quantidade: 25',
              preco: "R$ 49,90 ",
              tamanho: "Tamanho: 36,37,38,39 ",
              img: 'https://i.pinimg.com/736x/9f/80/65/9f8065b3d68890187055aa6c434c5c89.jpg',
            },
              
          {
            title: 'Havaianas infantil Hello Kitty',
            quantidade: 'Quantidade: 51',
            preco: "R$ 45,00 ",
            tamanho: "17,18,19,20,21,22,23,24,25,26,27,28,29,30",
            img: 'https://i.pinimg.com/736x/d9/5f/d3/d95fd395dd48e8566c58aab0228bde7f.jpg',
          },
      
          {
            title: 'Kit chinelo e acessórios bordados',
            quantidade: 'Quantidade: 74',
            preco: "R$ 59,90 ",
            img: 'https://i.pinimg.com/736x/76/e3/4e/76e34e08a547f6d6886d1a8cbe8fb9e0.jpg',
          },
      
          {
            title: 'Chaveiro em pedraria',
            quantidade: 'Quantidade: 8',
            preco: "R$ 22,50 ",
            img: 'https://i.pinimg.com/736x/d0/3f/8c/d03f8ce880be862cace8052626fd54e8.jpg',
          },
        ];

    return(
        <SafeAreaView style={{flex:1}}>

            <View style={styles.content}>
            <FlatList
                data={dataCarregada}
                renderItem={CardComponent}
                keyExtractor={item => item?.title}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                ListEmptyComponent={ListEmptyComponent}
            />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content:{
        backgroundColor: "white"
    },
    header:{
        backgroundColor: "#392de9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14
    },
      center: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      movieItem: {
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderColor: '#00A9F1',
        borderWidth: 1,
        borderRadius: 15,
      },
      poster: {
        width: "80%",
        height: 220,
        resizeMode: 'cover',
        marginVertical: 10,
        borderRadius: 10,
      },
      movieDetails: {
        padding: 5,
        paddingHorizontal: 7,
        alignItems: 'flex-start',
        width: "80%",
      },
      title: {
        fontSize: 30,
        marginBottom: 5,
        fontFamily: 'Pangram-Bold',
        lineHeight: 35,
        color: 'black',
      },
      demoTitle: {
        fontSize: 24,
        marginBottom: 5,
        fontFamily: 'Pangram-Bold',
        lineHeight: 26,
        marginVertical: 10,
        color: 'black',
      },
      description: {
        fontSize: 17,
        fontFamily: 'Pangram-Regular',
        lineHeight: 26,
        marginBottom: 10,
        textAlign: 'left',
        color: 'black',
      },
      about: {
        fontSize: 17,
        fontFamily: 'Pangram-Regular',
        lineHeight: 30,
        marginVertical: 10,
        marginHorizontal: 20,
    
        color: 'black',
      },
      searchDescription: {
        fontSize: 22,
        fontFamily: 'Pangram-Regular',
        marginBottom: 10,
      },
      searchLoader: {
        paddingTop: 30,
        marginTop: 20,
        marginBottom: 30,
      },
      searchMovies: {
        width: "80%",
        height: 300,
      }
    
})