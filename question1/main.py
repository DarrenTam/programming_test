from graphs import Graph

g = {
   "A" : [ "B" , "D" , "E" , "H" ],
   "B" : [ "C" , "D" , "A" ],
   "C" : [ "B" , "D" , "F" ],
   "D" : [ "A" , "B" , "C" , "E" ,"H" ],
   "E" : [ "F" , "D" , "G" ],
   "F" : [ "C" , "E" , "G" ],
   "G" : [ "F" , "H" ],
   "H" : [ "A" , "G"]
}


def find_shortest_path (paths):
    hops = None
    for path in paths:
        if( hops == None ) :
            hops = len(path);
        if hops != None and len(path) < hops :
            hops = len(path)
    return hops - 1
        

graph = Graph(g)

paths = graph.find_all_paths( "A", "H")

print(f'All path : {paths}')

shortest_path =  find_shortest_path(paths)

print(f'The least number of hops is {shortest_path}')
