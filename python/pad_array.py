from enum import Enum
import math

class Position(Enum):
    Center = 'Center'
    Left = 'Left'
    Right = 'Right'

def pad(array, minSize, value=None, pos = Position.Left):
    if minSize <= len(array):
        return array
    

    if pos == Position.Center:
        leftNum = (minSize - len(array)) / 2
        rightNum = math.floor(leftNum)
        leftNum = math.ceil(leftNum)
        for x in range(len(array)-1,minSize,1):
            if leftNum > 0:
                array.insert(0,value)
                leftNum -= 1
            elif rightNum > 0:
                array.append(value)
                rightNum -= 1

            
        
    
    elif pos == Position.Right:
        for x in range(len(array),minSize,1):
            array.insert(0,value)
    else:
        for x in range(len(array),minSize,1):
            array.append(value)
    return array

