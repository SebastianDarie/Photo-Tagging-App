import { useState, useEffect } from 'react'

const useFirebaseDB = (db, storage) => {
  const [imgURL, setImgURL] = useState(null)
  const [imgData, setImgData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const gsRef = storage.refFromURL(
          'gs://photo-tagging-4457a.appspot.com/waldo.jpeg'
        )
        const url = await gsRef.getDownloadURL()
        setImgURL(url)

        const snapshot = await db.collection('coords').get()
        snapshot.forEach((doc) => setImgData([...imgData, doc.data()]))
      } catch (error) {
        console.error(error)
      }
    }

    getData()
  }, [db, storage])

  return { imgURL, imgData }
}

export default useFirebaseDB
