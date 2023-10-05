from pad_array import pad, Position
def test_pad_array():
    assert pad([1,2,3],0) == [1, 2, 3]
    assert pad([1,2,3],3) == [1, 2, 3]
    assert pad([1,2,3],5,"apple") == [1, 2, 3,"apple","apple"]
    assert pad([1,2,3],5) == [1, 2, 3,None, None]
    assert pad([1,2,3],5,0,Position.Center) == [0, 1, 2, 3,0]
    assert pad([1,2,3],6,0,Position.Center) == [0,0, 1, 2, 3,0]
    assert pad([1,2,3],6,0,Position.Right) == [0,0,0, 1, 2, 3]
