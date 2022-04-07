import { client } from '../../client'

export const fetchBooks = async () => {
    return client.getEntries({
        content_type: "libri",
        select: "fields",
      }).then(res => res.items)
      .catch(err => console.log(err));

}

