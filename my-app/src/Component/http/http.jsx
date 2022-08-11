import { $host } from "."

export const createlink = async (link) => {
    const {data} = await $host.post('api/createlink', { link })
    return {data}
}

export const createcastomlink = async (link, textlink) => {
    const {data} = await $host.post('api/createcastomlink',{link, textlink})
    return {data}
}

export const getStatistics = async (link) => {
    const { data } = await $host.post('api/linkstatistics', { link })
    return {data}
}