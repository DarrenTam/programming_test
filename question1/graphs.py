class Graph(object):
    
    def __init__(self, graph_dict=None):
        
        if graph_dict == None:
            graph_dict = {}
        self.__graph_dict = graph_dict

    def find_all_paths(self, start, end, path=[]):

            graph = self.__graph_dict 
            path = path + [start]
            if start == end:
                return [path]
            if start not in graph:
                return []
            paths = []
            for vertex in graph[start]:
                if vertex not in path:
                    extended_paths = self.find_all_paths(vertex, 
                                                        end, 
                                                        path)
                    for p in extended_paths: 
                        paths.append(p)
            return paths


if __name__ == "__main__":

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

