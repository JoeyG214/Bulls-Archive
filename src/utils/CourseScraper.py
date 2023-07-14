import requests
import json

from bs4 import BeautifulSoup

base_url = 'https://catalog.usf.edu/content.php?catoid=17&catoid=17&navoid=2593&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&filter%5Bcpage%5D='

def main():
  courses_list = []

  # Fetching Courses and storing in list
  for i in range(1,33): # 33 pages on USF course catalog
    html_text = requests.get(f'{base_url}{i}#acalog_template_course_filter').text
    soup = BeautifulSoup(html_text, 'lxml') # must use lxml package
    html_table_elements = soup.find_all('td', class_ = 'width')

    for element in html_table_elements:
      course = element.find('a').text
      courses_list.append(course)
  
  # Reformatting course string
  updated_courses_list = []

  for course in courses_list:
    updated_course_string = course.replace('\xa0-\xa0', ' ')
    updated_courses_list.append(updated_course_string)
  
  # Splitting course into course name and course number
  split_courses_list = []

  for course in updated_courses_list:
    split_string = course.split(' ', 2)
    string_one = split_string[0] + ' ' + split_string[1]
    string_two = split_string[2] 
    course_list = [string_one, string_two]
    split_courses_list.append(course_list)

  # Generating course array of objects
  courses_array_of_objects = [{'name': item[1], 'number': item[0]} for item in split_courses_list if item[0].startswith(('CDA', 'COP', 'COT', 'CAP', 'CIS', 'CEN', 'CNT'))]

  # Converting courses_array_of_objects into JSON
  json_courses = json.dumps(courses_array_of_objects, indent=4)

  # Storing JSON in JSON file
  with open('my_courses.json', 'w') as f:
    f.write(json_courses)

if __name__ == '__main__':
    main()