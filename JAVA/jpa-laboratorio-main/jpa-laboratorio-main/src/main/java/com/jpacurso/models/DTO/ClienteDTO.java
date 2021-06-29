package com.jpacurso.models.DTO;

import com.jpacurso.models.Factura;
import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class ClienteDTO implements Serializable {

	private Long id;
	private String nombre;
	private String apellido;
	private String email;
	private Date createAt;
	private List<Factura> facturas;
	private String foto;

	public ClienteDTO() {
		facturas = new ArrayList<>();
	}


	public static final long serialVersionUID = 1L;

}
