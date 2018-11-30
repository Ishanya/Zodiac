package com.ntl.movieapp.search.controller;


import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ntl.movieapp.search.model.Movie;
import com.ntl.movieapp.search.service.SearchService;



@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)

@RestController
public class SearchController {
	
	@Autowired
	SearchService service;
	


	public SearchController() {
		super();
	}



	public SearchController(SearchService serve) {
		super();
		service=serve;
	}



	@GetMapping("/searchs/{title}")
	public List<Movie> searchList(@PathVariable("title") String title){

		return service.allMoviesByTitle(title);
		
		
	}
	
	
	
		
	@GetMapping("search/{list}")
	public List<Movie> searchFavList(@PathVariable("list") String list){



	List<Integer> listing=new ArrayList();

	String[] splittedList=list.split(",");
	for(int u=0;u<splittedList.length;u++)
	{
	listing.add(Integer.parseInt(splittedList[u])); 
	}

	List<Movie> listOfMovie;
    System.out.println("List of IDS for final processing - " +listing.size());
	listOfMovie= service.allMoviesById(listing);
    System.out.println("Final Output size -" + listOfMovie.size());
	

	return listOfMovie;


	}

	
}
