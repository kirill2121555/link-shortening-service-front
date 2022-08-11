import { $host } from "."

export const createlink = async (link) => {
    const {data} = await $host.post('/createlink', { link })
    return {data}
}

export const createcastomlink = async (link, textlink) => {
    const {data} = await $host.post('/createcastomlink',{link, textlink})
    return {data}
}

export const getStatistics = async (link) => {
    const { data } = await $host.post('/linkstatistics', { link })
    return {data}
}