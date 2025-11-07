package com.example.backend.sharing.controller;

import com.example.backend.sharing.dto.ChurchSharingAddDto;
import com.example.backend.sharing.dto.ChurchSharingListDto;
import com.example.backend.sharing.service.SharingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/sharing")
@RequiredArgsConstructor
public class SharingController {
    private final SharingService sharingService;


    @PostMapping("add")
    public ResponseEntity<?> add(@RequestBody ChurchSharingAddDto dto) {
        sharingService.add(dto);
        System.out.println("dto = " + dto);
        return ResponseEntity.ok().body(Map.of("message", "success"));
    }

    @GetMapping("list")
    public List<?> list() {
        return sharingService.list();
    }


}
