# khusus request ini apabila dijalankan di local, maka harus di-install librarynya terlebih dahulu 
# dengan cara pip install requests
import requests
import json

url = "https://moviesdatabase.p.rapidapi.com/titles"

headers = {
	"X-RapidAPI-Key": "f4404ad3f6msh2be7d6b2cb3a2f8p181a08jsn4baf211cad41",
	"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers)




url2 = "https://moviesdatabase.p.rapidapi.com/actors"

headers2 = {
	"X-RapidAPI-Key": "f4404ad3f6msh2be7d6b2cb3a2f8p181a08jsn4baf211cad41",
	"X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
}

response2 = requests.request("GET", url2, headers=headers2)


# variable dic2 ini berbentuk dictionary
dic2 = json.loads(response2.text)

# variable dic ini berbentuk dictionary
dic = json.loads(response.text)

def get_all_movies():
    # kita bungkus dalam sebuah variable result 
    result = dic["results"]
    # kita buat perulangannya
    for resu in result:
        print(resu["titleText"]["text"],"(",resu["releaseYear"]["year"],")")
    exit()

def get_all_actors():
    result2 = dic2["results"]
    for i in result2:
        print(i["primaryName"])
    exit()



print("""
    Masukkan angka 1 inputanmu di bawah ini
    1. list pelem
    2. list actor
    """)
invutan = int(input("masukkan di sini \n"))


match invutan:
    case 1:
        get_all_movies()
    case 2:
        get_all_actors()
    case 0:
        exit()