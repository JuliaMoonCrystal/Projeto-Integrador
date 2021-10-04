package br.org.generation.acacia.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.acacia.model.Tema;

@Repository
public interface TemaRepository extends JpaRepository<Tema, Long> {
	public List <Tema> findAllByTituloContainingIgnoreCase(String titulo);

}
