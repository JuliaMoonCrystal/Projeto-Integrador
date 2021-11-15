package br.org.generation.acacia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.org.generation.acacia.model.Postagem;
import br.org.generation.acacia.repository.PostagemRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/postagem")
public class PostagemController {
      
	@Autowired
	private PostagemRepository postagemRepository;
	
	@GetMapping
	public ResponseEntity<List<Postagem>> getAll(){
		return ResponseEntity.ok(postagemRepository.findAll());	
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Postagem> getById(@PathVariable long id){
		return postagemRepository.findById(id)
				.map(resposta -> ResponseEntity.ok().body(resposta))
				.orElse(ResponseEntity.notFound().build());
		
	}
	
	@GetMapping("/titulo/{titulo}")
	public ResponseEntity<List<Postagem>> getByTitulo(@PathVariable String titulo){
		return ResponseEntity.ok(postagemRepository.findAllByTituloContainingIgnoreCase(titulo));	
	}
	
	@PostMapping
	public ResponseEntity<Postagem> postPostagem(@RequestBody Postagem postagem){
		return ResponseEntity.status(HttpStatus.CREATED).body(postagemRepository.save(postagem));
	}
	
	@PutMapping
	public ResponseEntity<Postagem> putPostagem(@RequestBody Postagem postagem){
		return ResponseEntity.status(HttpStatus.OK).body(postagemRepository.save(postagem));		
	}
	
	@DeleteMapping("/{id}")
	public void deletePotagem(@PathVariable long id) {
		postagemRepository.deleteById(id);
	}
	
}
