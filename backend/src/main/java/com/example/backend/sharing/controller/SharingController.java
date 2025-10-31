package com.example.backend.sharing.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("api/sharing")
@RequiredArgsConstructor
public class SharingController {
/*
    @PostMapping("add")
    public ResponseEntity<?> add(@RequestBody SharingDto dto){
        sharingService.add(dto);
        System.out.println("dto = " + dto);
        return ResponseEntity.ok().body(Map.of("message", "success"));
    }



    )*/
}
