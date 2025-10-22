// API 调用工具函数

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

interface FetchOptions extends RequestInit {
  params?: Record<string, string>
}

/**
 * 通用 API 调用函数
 */
export async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { params, ...fetchOptions } = options

  // 构建 URL
  let url = `${API_BASE_URL}${endpoint}`
  if (params) {
    const searchParams = new URLSearchParams(params)
    url += `?${searchParams.toString()}`
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API call failed:', error)
    throw error
  }
}

/**
 * GET 请求
 */
export async function get<T>(
  endpoint: string,
  params?: Record<string, string>
): Promise<T> {
  return fetchAPI<T>(endpoint, { method: 'GET', params })
}

/**
 * POST 请求
 */
export async function post<T>(
  endpoint: string,
  data?: unknown
): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

/**
 * PUT 请求
 */
export async function put<T>(
  endpoint: string,
  data?: unknown
): Promise<T> {
  return fetchAPI<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

/**
 * DELETE 请求
 */
export async function del<T>(endpoint: string): Promise<T> {
  return fetchAPI<T>(endpoint, { method: 'DELETE' })
}

