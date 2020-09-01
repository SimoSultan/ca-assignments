def mergeSort(arr)
  if arr.length == 1
      return arr
  else
      a = arr[arr.size/2]
      b = arr[arr.size/2]
  end

  a = mergeSort(a)
  b = mergeSort(b)
  c = []
  i = 0
  j = 0

  while i < a.length and j < b.length
          if a[i] < b[j]
              c.append(a[i])
              i = i + 1
          else
              c.append(b[j])
              j = j + 1
          end
    c += a[i]
    c += b[j]
  end
  return c
end


puts mergeSort([3,5,4, 2, 1])



# def bubbleSort(arr):
#   # Loop through list once per element
#   for _ in range ( 0, len(arr)):
#       for i in range(0, len(arr)-1):
#           # compare and swap adjacent elements
#           if arr[i] > arr[i+1]:
#               arr[i], arr[i+1] = arr[i+1], arr[i]
#   return arr

# end

# puts bubbleSort([3,5,4, 2, 1])