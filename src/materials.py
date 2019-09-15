import urllib
import simplejson
 
base_url = 'http://api.earth911.com/'
api_key = "4ecb2867973c953f"
 
def query(url):
    text = urllib.urlopen(url).read()
    result = simplejson.loads(text)
    if 'error' in result:
        raise Exception(result['error'])
    else:
        return result['result']
 
def get_materials():
    return query(base_url + 'earth911.getMaterials?api_key=' + api_key)
 
for material in get_materials():
    print '%s (%s)' % (material['description'], material['material_id'])
