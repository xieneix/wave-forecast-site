window.WAVE_RUNTIME_DATA = {
  "generatedAt": "2026-05-20T00:00:00",
  "registry": {
    "schema_version": 1,
    "selection_rule": "min metrics.mape_test, fallback metrics.best_val_mape, fallback val_metrics.val_mape",
    "output_root": "E:\\PycharmProjects\\graduation\\output",
    "candidate_runs": 2564,
    "models": {
      "bohai": {
        "48": {
          "region": "bohai",
          "horizon": 48,
          "method": "VMD",
          "model_type": "LSTM",
          "selection_score": 0.05288135978056447,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.05288135978056447,
          "best_val_mape": 0.07156128228612146,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105\\run_053cc55e",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105\\run_053cc55e\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105\\run_053cc55e\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 96,
          "hidden_dim": 192,
          "num_layers": 3,
          "nhead": 4,
          "batch_size": 16,
          "drop_ratio": 0.0005445358389140897,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 592.2758371785021,
            "tau": 0.07001684617752411,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\bohai_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "72": {
          "region": "bohai",
          "horizon": 72,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.07726323787683671,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.07726323787683671,
          "best_val_mape": 0.1080427113735117,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212\\run_b68c39f5",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212\\run_b68c39f5\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212\\run_b68c39f5\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 176,
          "hidden_dim": 128,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 16,
          "drop_ratio": 0.006071230558682271,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 603.53609012607,
            "tau": 0.041295820052733696,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\bohai_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "96": {
          "region": "bohai",
          "horizon": 96,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.11562269887796735,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.11562269887796735,
          "best_val_mape": 0.15224377950164672,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622\\run_c266cb2d",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622\\run_c266cb2d\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622\\run_c266cb2d\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 248,
          "hidden_dim": 192,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 64,
          "drop_ratio": 0.0003379900521644254,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 2285.8208245490164,
            "tau": 0.22172544635203673,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\bohai_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        }
      },
      "yellow": {
        "48": {
          "region": "yellow",
          "horizon": 48,
          "method": "VMD",
          "model_type": "TRANSFORMER",
          "selection_score": 0.041715322848743505,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.041715322848743505,
          "best_val_mape": 0.051343763620555476,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214\\run_f5d287da",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214\\run_f5d287da\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214\\run_f5d287da\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 116,
          "hidden_dim": 128,
          "num_layers": 4,
          "nhead": 2,
          "batch_size": 32,
          "drop_ratio": 0.00033727439245672146,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 9,
          "vmd_hparams": {
            "K": 9,
            "alpha": 3395.8905788727325,
            "tau": 0.2650653163318094,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\yellow_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "72": {
          "region": "yellow",
          "horizon": 72,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.046885039371552126,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.046885039371552126,
          "best_val_mape": 0.05541419968968507,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626\\run_faa4b156",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626\\run_faa4b156\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626\\run_faa4b156\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 160,
          "hidden_dim": 128,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 64,
          "drop_ratio": 0.00017918787564294696,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 825.8801783157567,
            "tau": 0.26042223534771664,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\yellow_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "96": {
          "region": "yellow",
          "horizon": 96,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.05653362660475795,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.05653362660475795,
          "best_val_mape": 0.06996706501351524,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021\\run_abae115b",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021\\run_abae115b\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021\\run_abae115b\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 192,
          "hidden_dim": 224,
          "num_layers": 2,
          "nhead": 4,
          "batch_size": 32,
          "drop_ratio": 0.0037647359626538646,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 2671.3777905435627,
            "tau": 0.004736778822879498,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\yellow_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        }
      },
      "east": {
        "48": {
          "region": "east",
          "horizon": 48,
          "method": "VMD",
          "model_type": "TRANSFORMER",
          "selection_score": 0.039814403260396855,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.039814403260396855,
          "best_val_mape": 0.04031388223622378,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455\\run_d9baa362",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455\\run_d9baa362\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455\\run_d9baa362\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 128,
          "hidden_dim": 128,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 128,
          "drop_ratio": 0.025796935842493186,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 9,
          "vmd_hparams": {
            "K": 9,
            "alpha": 595.2089606905668,
            "tau": 0.26118661753952505,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\east_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "72": {
          "region": "east",
          "horizon": 72,
          "method": "VMD",
          "model_type": "LSTM",
          "selection_score": 0.03877862334377191,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.03877862334377191,
          "best_val_mape": 0.03925876865343651,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621\\run_412556b0",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621\\run_412556b0\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621\\run_412556b0\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 168,
          "hidden_dim": 32,
          "num_layers": 4,
          "nhead": 4,
          "batch_size": 64,
          "drop_ratio": 0.00027175054024844436,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 4970.7005128836945,
            "tau": 0.4960265215326879,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\east_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "96": {
          "region": "east",
          "horizon": 96,
          "method": "VMD",
          "model_type": "GRU",
          "selection_score": 0.05085697114499543,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.05085697114499543,
          "best_val_mape": 0.0492827136993035,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258\\run_fec9fef9",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258\\run_fec9fef9\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258\\run_fec9fef9\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 240,
          "hidden_dim": 64,
          "num_layers": 2,
          "nhead": 4,
          "batch_size": 64,
          "drop_ratio": 0.0002012746272450558,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 986.2698683400453,
            "tau": 0.095128412000397,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\east_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        }
      },
      "south": {
        "48": {
          "region": "south",
          "horizon": 48,
          "method": "VMD",
          "model_type": "LSTM",
          "selection_score": 0.02831280236544703,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.02831280236544703,
          "best_val_mape": 0.02433258968207857,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926\\run_05d38226",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926\\run_05d38226\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926\\run_05d38226\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 128,
          "hidden_dim": 224,
          "num_layers": 2,
          "nhead": 4,
          "batch_size": 16,
          "drop_ratio": 0.0016685175793544004,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 10,
          "vmd_hparams": {
            "K": 10,
            "alpha": 898.3826960132812,
            "tau": 0.23231634274131757,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\south_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "72": {
          "region": "south",
          "horizon": 72,
          "method": "VMD",
          "model_type": "LSTM",
          "selection_score": 0.038381207198606895,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.038381207198606895,
          "best_val_mape": 0.03402088283607312,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612\\run_cd292818",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612\\run_cd292818\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612\\run_cd292818\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 208,
          "hidden_dim": 96,
          "num_layers": 2,
          "nhead": 4,
          "batch_size": 16,
          "drop_ratio": 0.0004271580731392728,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 9,
          "vmd_hparams": {
            "K": 9,
            "alpha": 4428.169003885152,
            "tau": 0.17926939287175325,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\south_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        },
        "96": {
          "region": "south",
          "horizon": 96,
          "method": "VMD",
          "model_type": "TRANSFORMER",
          "selection_score": 0.0565508821960269,
          "selection_score_source": "metrics.mape_test",
          "mape_test": 0.0565508821960269,
          "best_val_mape": 0.05093034879231805,
          "study_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319",
          "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319\\run_9ea7cec4",
          "model_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319\\run_9ea7cec4\\model_best.pt",
          "params_path": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319\\run_9ea7cec4\\params_snapshot.json",
          "input_scaler_path": null,
          "window_size": 264,
          "hidden_dim": 64,
          "num_layers": 2,
          "nhead": 8,
          "batch_size": 64,
          "drop_ratio": 0.024646567927696886,
          "mode_scaling": "none",
          "mode_prefix": "VMD_",
          "mode_count": 9,
          "vmd_hparams": {
            "K": 9,
            "alpha": 4921.822994533805,
            "tau": 0.2103007680756655,
            "DC": 0,
            "init": 1,
            "tol": 1e-07
          },
          "decomposition": {
            "path": "E:\\PycharmProjects\\graduation\\input\\extracted\\south_timeseries.csv",
            "exists": true,
            "rows": 50936,
            "start": "2020-01-01 00:00:00",
            "end": "2025-10-23 08:00:00",
            "derived_from": "raw_csv_even_length_for_vmd"
          }
        }
      }
    }
  },
  "forecasts": {
    "bohai": {
      "48": {
        "region": "bohai",
        "horizon": 48,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "LSTM",
        "window_size": 96,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.05288135978056447,
        "mape_test": 0.05288135978056447,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\LSTM\\bayes_h48_20251209T062105\\run_053cc55e",
        "peak_swh": 0.4897218942642212,
        "peak_lead_hour": 29,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "smooth",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.3190206289291382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.3292480111122131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.335241436958313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.3957932591438293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.5297577381134033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.6697316765785217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.7305321097373962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.6998740434646606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.6492921710014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.6056669354438782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.5767298936843872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.6029483675956726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.7080567479133606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.818469226360321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.8850973844528198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.8948357701301575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.8653426766395569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.8289275765419006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7925707101821899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7555124759674072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7185232639312744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.6866769194602966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.6547608375549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.6261652708053589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.603277862071991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.5774824023246765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.5450257658958435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.5111308693885803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.4811227917671203
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.4556946754455566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.4366386532783508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.4222297072410583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.4129440784454345
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.4127233028411865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.3967375755310058
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.4056255221366882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.4280098080635071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.4347802996635437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.4374690055847168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.445741057395935
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.4524083137512207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.4623666405677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.4799302816390991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.4954524636268616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.5085980296134949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.5117474794387817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.4806689321994781
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.4601855874061584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.4399519860744476
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.4213306009769439
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.408143401145935
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.4108437895774841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.425597608089447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.4417088627815246
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.4531756639480591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.4633761048316955
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.4765405058860779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.4946871995925903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.4865578413009643
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.48629230260849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.4779412150382995
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.4696725010871887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.4662906527519226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.4634010195732116
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.4660791754722595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.4814460277557373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.5039860606193542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.5191861391067505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.5165833234786987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.4977703094482422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.4698269665241241
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.4463803172111511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.4263189435005188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.4100943803787231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.3999804854393005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.3968623876571655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.405342161655426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.4196636080741882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.4318691492080688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.4371739625930786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.4380244016647339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.4398804903030395
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.4147815704345703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.4190374612808227
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.441257894039154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.4683632254600525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.4917930364608764
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.4980925917625427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.492039144039154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.4786092638969421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.4621374011039734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.4437230229377746
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.4250556230545044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.41017746925354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.3903000354766845
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.3883466720581054
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.38629597425460815
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.3860469460487366
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.3916758894920349
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.4061639904975891
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.4205020070075989
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.4242677092552185
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.42718505859375
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.4400416612625122
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.46264225244522095
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.47685569524765015
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.46631357073783875
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.43250560760498047
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.3945194184780121
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.3595065474510193
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.34608715772628784
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.3612479567527771
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.38679182529449463
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.4036184847354889
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.40755462646484375
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.4001520872116089
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.3848939538002014
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.36843883991241455
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.3669581413269043
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.3820294439792633
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.4043821692466736
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.4360017776489258
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.4636308252811432
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.4807000160217285
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.4897218942642212
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.48508718609809875
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.4702341556549072
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.45217588543891907
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.4399244785308838
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.430204838514328
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.4220189154148102
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.41652488708496094
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.4206733703613281
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.42475610971450806
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.42496442794799805
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.42746806144714355
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.43031537532806396
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.4355859160423279
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.4427706003189087
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.44637244939804077
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.4424871504306793
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.43516647815704346
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.42768198251724243
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.4209290146827698
          }
        ]
      },
      "72": {
        "region": "bohai",
        "horizon": 72,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 176,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.07726323787683671,
        "mape_test": 0.07726323787683671,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h72_20251211T063212\\run_b68c39f5",
        "peak_swh": 0.55534827709198,
        "peak_lead_hour": 72,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "slight",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.3190206289291382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.3292480111122131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.335241436958313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.3957932591438293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.5297577381134033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.6697316765785217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.7305321097373962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.6998740434646606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.6492921710014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.6056669354438782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.5767298936843872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.6029483675956726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.7080567479133606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.818469226360321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.8850973844528198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.8948357701301575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.8653426766395569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.8289275765419006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7925707101821899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7555124759674072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7185232639312744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.6866769194602966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.6547608375549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.6261652708053589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.603277862071991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.5774824023246765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.5450257658958435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.5111308693885803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.4811227917671203
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.4556946754455566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.4366386532783508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.4222297072410583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.4129440784454345
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.4127233028411865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.3967375755310058
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.4056255221366882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.4280098080635071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.4347802996635437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.4374690055847168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.445741057395935
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.4524083137512207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.4623666405677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.4799302816390991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.4954524636268616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.5085980296134949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.5117474794387817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.4806689321994781
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.4601855874061584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.4399519860744476
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.4213306009769439
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.408143401145935
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.4108437895774841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.425597608089447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.4417088627815246
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.4531756639480591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.4633761048316955
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.4765405058860779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.4946871995925903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.4865578413009643
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.48629230260849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.4779412150382995
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.4696725010871887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.4662906527519226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.4634010195732116
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.4660791754722595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.4814460277557373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.5039860606193542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.5191861391067505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.5165833234786987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.4977703094482422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.4698269665241241
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.4463803172111511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.4263189435005188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.4100943803787231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.3999804854393005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.3968623876571655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.405342161655426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.4196636080741882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.4318691492080688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.4371739625930786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.4380244016647339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.4398804903030395
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.4147815704345703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.4190374612808227
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.441257894039154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.4683632254600525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.4917930364608764
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.4980925917625427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.492039144039154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.4786092638969421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.4621374011039734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.4437230229377746
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.4250556230545044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.41017746925354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.3903000354766845
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.3883466720581054
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.37399178743362427
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.3813187777996063
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.3906170427799225
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.40395739674568176
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.4135212004184723
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.4215026795864105
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.43438148498535156
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.4461694061756134
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.45741328597068787
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.4592954218387604
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.45004475116729736
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.4344256520271301
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.4219230115413666
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.41267237067222595
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.40378257632255554
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.39804714918136597
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.3949630558490753
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.3941841721534729
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.39617782831192017
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.4007384777069092
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.4034683108329773
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.4076092541217804
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.4174255132675171
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.42989465594291687
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.4453933537006378
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.4644678235054016
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.4853499233722687
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.5005711317062378
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.5104165077209473
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.5111416578292847
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.5072062611579895
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.5007131099700928
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.4902360141277313
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.47889599204063416
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.4668895900249481
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.4554721713066101
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.4496859908103943
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.44901615381240845
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.4522078037261963
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.4582388997077942
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.4678437411785126
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.47599345445632935
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.48077836632728577
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.47850245237350464
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.46996986865997314
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.46264344453811646
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.4538865387439728
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.44524946808815
          },
          {
            "lead_hour": 49,
            "time": "2026-05-03T00:00:00",
            "swh": 0.4373764991760254
          },
          {
            "lead_hour": 50,
            "time": "2026-05-03T01:00:00",
            "swh": 0.4327531158924103
          },
          {
            "lead_hour": 51,
            "time": "2026-05-03T02:00:00",
            "swh": 0.42942968010902405
          },
          {
            "lead_hour": 52,
            "time": "2026-05-03T03:00:00",
            "swh": 0.4275982677936554
          },
          {
            "lead_hour": 53,
            "time": "2026-05-03T04:00:00",
            "swh": 0.42548516392707825
          },
          {
            "lead_hour": 54,
            "time": "2026-05-03T05:00:00",
            "swh": 0.42372554540634155
          },
          {
            "lead_hour": 55,
            "time": "2026-05-03T06:00:00",
            "swh": 0.42206230759620667
          },
          {
            "lead_hour": 56,
            "time": "2026-05-03T07:00:00",
            "swh": 0.41748133301734924
          },
          {
            "lead_hour": 57,
            "time": "2026-05-03T08:00:00",
            "swh": 0.41838061809539795
          },
          {
            "lead_hour": 58,
            "time": "2026-05-03T09:00:00",
            "swh": 0.42572951316833496
          },
          {
            "lead_hour": 59,
            "time": "2026-05-03T10:00:00",
            "swh": 0.4345244765281677
          },
          {
            "lead_hour": 60,
            "time": "2026-05-03T11:00:00",
            "swh": 0.4460141956806183
          },
          {
            "lead_hour": 61,
            "time": "2026-05-03T12:00:00",
            "swh": 0.4584510624408722
          },
          {
            "lead_hour": 62,
            "time": "2026-05-03T13:00:00",
            "swh": 0.46921995282173157
          },
          {
            "lead_hour": 63,
            "time": "2026-05-03T14:00:00",
            "swh": 0.48052746057510376
          },
          {
            "lead_hour": 64,
            "time": "2026-05-03T15:00:00",
            "swh": 0.49023374915122986
          },
          {
            "lead_hour": 65,
            "time": "2026-05-03T16:00:00",
            "swh": 0.4972723722457886
          },
          {
            "lead_hour": 66,
            "time": "2026-05-03T17:00:00",
            "swh": 0.5027267932891846
          },
          {
            "lead_hour": 67,
            "time": "2026-05-03T18:00:00",
            "swh": 0.512753963470459
          },
          {
            "lead_hour": 68,
            "time": "2026-05-03T19:00:00",
            "swh": 0.5222094655036926
          },
          {
            "lead_hour": 69,
            "time": "2026-05-03T20:00:00",
            "swh": 0.5282235741615295
          },
          {
            "lead_hour": 70,
            "time": "2026-05-03T21:00:00",
            "swh": 0.536069929599762
          },
          {
            "lead_hour": 71,
            "time": "2026-05-03T22:00:00",
            "swh": 0.543939471244812
          },
          {
            "lead_hour": 72,
            "time": "2026-05-03T23:00:00",
            "swh": 0.55534827709198
          }
        ]
      },
      "96": {
        "region": "bohai",
        "horizon": 96,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 248,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.11562269887796735,
        "mape_test": 0.11562269887796735,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\bohai\\forecast\\VMD\\GRU\\bayes_h96_20251212T002622\\run_c266cb2d",
        "peak_swh": 0.6722042560577393,
        "peak_lead_hour": 79,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "slight",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.3190206289291382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.3292480111122131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.335241436958313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.3957932591438293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.5297577381134033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.6697316765785217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.7305321097373962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.6998740434646606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.6492921710014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.6056669354438782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.5767298936843872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.6029483675956726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.7080567479133606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.818469226360321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.8850973844528198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.8948357701301575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.8653426766395569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.8289275765419006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7925707101821899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7555124759674072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7185232639312744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.6866769194602966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.6547608375549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.6261652708053589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.603277862071991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.5774824023246765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.5450257658958435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.5111308693885803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.4811227917671203
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.4556946754455566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.4366386532783508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.4222297072410583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.4129440784454345
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.4127233028411865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.3967375755310058
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.4056255221366882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.4280098080635071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.4347802996635437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.4374690055847168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.445741057395935
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.4524083137512207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.4623666405677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.4799302816390991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.4954524636268616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.5085980296134949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.5117474794387817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.4806689321994781
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.4601855874061584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.4399519860744476
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.4213306009769439
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.408143401145935
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.4108437895774841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.425597608089447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.4417088627815246
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.4531756639480591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.4633761048316955
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.4765405058860779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.4946871995925903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.4865578413009643
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.48629230260849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.4779412150382995
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.4696725010871887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.4662906527519226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.4634010195732116
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.4660791754722595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.4814460277557373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.5039860606193542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.5191861391067505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.5165833234786987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.4977703094482422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.4698269665241241
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.4463803172111511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.4263189435005188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.4100943803787231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.3999804854393005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.3968623876571655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.405342161655426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.4196636080741882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.4318691492080688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.4371739625930786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.4380244016647339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.4398804903030395
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.4147815704345703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.4190374612808227
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.441257894039154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.4683632254600525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.4917930364608764
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.4980925917625427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.492039144039154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.4786092638969421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.4621374011039734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.4437230229377746
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.4250556230545044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.41017746925354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.3903000354766845
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.3883466720581054
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.31259897351264954
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.3142893314361572
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.33535104990005493
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.36249980330467224
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.38633599877357483
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.4090918302536011
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.4336244463920593
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.4586910605430603
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.4761994779109955
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.4773435890674591
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.465034544467926
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.4485028088092804
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.4301610589027405
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.4238870441913605
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.42778658866882324
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.43724626302719116
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.4408092796802521
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.4373822808265686
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.43173784017562866
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.41953808069229126
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.39767083525657654
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.3717297911643982
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.3446619212627411
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.3330730199813843
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.3374248147010803
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.3557732403278351
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.38420361280441284
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.4164254069328308
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.44325780868530273
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.46159684658050537
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.4691178798675537
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.47314074635505676
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.4673568606376648
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.4549695551395416
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.4357742965221405
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.42002159357070923
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.4180714786052704
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.4227459132671356
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.42770421504974365
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.4340110421180725
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.43494540452957153
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.4398255944252014
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.45113644003868103
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.46170443296432495
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.4738820493221283
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.4849047064781189
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.48990607261657715
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.49253445863723755
          },
          {
            "lead_hour": 49,
            "time": "2026-05-03T00:00:00",
            "swh": 0.4906691610813141
          },
          {
            "lead_hour": 50,
            "time": "2026-05-03T01:00:00",
            "swh": 0.49026206135749817
          },
          {
            "lead_hour": 51,
            "time": "2026-05-03T02:00:00",
            "swh": 0.49459022283554077
          },
          {
            "lead_hour": 52,
            "time": "2026-05-03T03:00:00",
            "swh": 0.49297595024108887
          },
          {
            "lead_hour": 53,
            "time": "2026-05-03T04:00:00",
            "swh": 0.47808563709259033
          },
          {
            "lead_hour": 54,
            "time": "2026-05-03T05:00:00",
            "swh": 0.45921561121940613
          },
          {
            "lead_hour": 55,
            "time": "2026-05-03T06:00:00",
            "swh": 0.4457699656486511
          },
          {
            "lead_hour": 56,
            "time": "2026-05-03T07:00:00",
            "swh": 0.43535131216049194
          },
          {
            "lead_hour": 57,
            "time": "2026-05-03T08:00:00",
            "swh": 0.42658665776252747
          },
          {
            "lead_hour": 58,
            "time": "2026-05-03T09:00:00",
            "swh": 0.41760966181755066
          },
          {
            "lead_hour": 59,
            "time": "2026-05-03T10:00:00",
            "swh": 0.41501522064208984
          },
          {
            "lead_hour": 60,
            "time": "2026-05-03T11:00:00",
            "swh": 0.42000117897987366
          },
          {
            "lead_hour": 61,
            "time": "2026-05-03T12:00:00",
            "swh": 0.431129515171051
          },
          {
            "lead_hour": 62,
            "time": "2026-05-03T13:00:00",
            "swh": 0.4485980272293091
          },
          {
            "lead_hour": 63,
            "time": "2026-05-03T14:00:00",
            "swh": 0.4666891396045685
          },
          {
            "lead_hour": 64,
            "time": "2026-05-03T15:00:00",
            "swh": 0.48423370718955994
          },
          {
            "lead_hour": 65,
            "time": "2026-05-03T16:00:00",
            "swh": 0.49421530961990356
          },
          {
            "lead_hour": 66,
            "time": "2026-05-03T17:00:00",
            "swh": 0.5137040019035339
          },
          {
            "lead_hour": 67,
            "time": "2026-05-03T18:00:00",
            "swh": 0.5414997339248657
          },
          {
            "lead_hour": 68,
            "time": "2026-05-03T19:00:00",
            "swh": 0.5703436136245728
          },
          {
            "lead_hour": 69,
            "time": "2026-05-03T20:00:00",
            "swh": 0.5932834148406982
          },
          {
            "lead_hour": 70,
            "time": "2026-05-03T21:00:00",
            "swh": 0.607542097568512
          },
          {
            "lead_hour": 71,
            "time": "2026-05-03T22:00:00",
            "swh": 0.6111488938331604
          },
          {
            "lead_hour": 72,
            "time": "2026-05-03T23:00:00",
            "swh": 0.617606520652771
          },
          {
            "lead_hour": 73,
            "time": "2026-05-04T00:00:00",
            "swh": 0.62322998046875
          },
          {
            "lead_hour": 74,
            "time": "2026-05-04T01:00:00",
            "swh": 0.6294384002685547
          },
          {
            "lead_hour": 75,
            "time": "2026-05-04T02:00:00",
            "swh": 0.6384870409965515
          },
          {
            "lead_hour": 76,
            "time": "2026-05-04T03:00:00",
            "swh": 0.6501117944717407
          },
          {
            "lead_hour": 77,
            "time": "2026-05-04T04:00:00",
            "swh": 0.659315824508667
          },
          {
            "lead_hour": 78,
            "time": "2026-05-04T05:00:00",
            "swh": 0.6649621725082397
          },
          {
            "lead_hour": 79,
            "time": "2026-05-04T06:00:00",
            "swh": 0.6722042560577393
          },
          {
            "lead_hour": 80,
            "time": "2026-05-04T07:00:00",
            "swh": 0.6700904965400696
          },
          {
            "lead_hour": 81,
            "time": "2026-05-04T08:00:00",
            "swh": 0.6671670079231262
          },
          {
            "lead_hour": 82,
            "time": "2026-05-04T09:00:00",
            "swh": 0.6636652946472168
          },
          {
            "lead_hour": 83,
            "time": "2026-05-04T10:00:00",
            "swh": 0.6532078981399536
          },
          {
            "lead_hour": 84,
            "time": "2026-05-04T11:00:00",
            "swh": 0.6389265656471252
          },
          {
            "lead_hour": 85,
            "time": "2026-05-04T12:00:00",
            "swh": 0.6255331635475159
          },
          {
            "lead_hour": 86,
            "time": "2026-05-04T13:00:00",
            "swh": 0.6172974705696106
          },
          {
            "lead_hour": 87,
            "time": "2026-05-04T14:00:00",
            "swh": 0.6080676317214966
          },
          {
            "lead_hour": 88,
            "time": "2026-05-04T15:00:00",
            "swh": 0.5929465293884277
          },
          {
            "lead_hour": 89,
            "time": "2026-05-04T16:00:00",
            "swh": 0.5715650320053101
          },
          {
            "lead_hour": 90,
            "time": "2026-05-04T17:00:00",
            "swh": 0.5535064935684204
          },
          {
            "lead_hour": 91,
            "time": "2026-05-04T18:00:00",
            "swh": 0.5338560938835144
          },
          {
            "lead_hour": 92,
            "time": "2026-05-04T19:00:00",
            "swh": 0.5257836580276489
          },
          {
            "lead_hour": 93,
            "time": "2026-05-04T20:00:00",
            "swh": 0.5237468481063843
          },
          {
            "lead_hour": 94,
            "time": "2026-05-04T21:00:00",
            "swh": 0.5211642384529114
          },
          {
            "lead_hour": 95,
            "time": "2026-05-04T22:00:00",
            "swh": 0.5171533823013306
          },
          {
            "lead_hour": 96,
            "time": "2026-05-04T23:00:00",
            "swh": 0.5134623646736145
          }
        ]
      }
    },
    "east": {
      "48": {
        "region": "east",
        "horizon": 48,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "TRANSFORMER",
        "window_size": 128,
        "mode_count": 9,
        "mode_scaling": "none",
        "selection_score": 0.039814403260396855,
        "mape_test": 0.039814403260396855,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251219T152455\\run_d9baa362",
        "peak_swh": 2.394235610961914,
        "peak_lead_hour": 33,
        "risk_level": "medium",
        "risk_label": "中",
        "sea_state": "moderate",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.6837667226791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.6754394173622131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.665075421333313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.6540940403938293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.6421844959259033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.6279836297035217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.6145653128623962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.6014853715896606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.5887452960014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.5771024823188782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.5657435655593872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.5619327425956726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.5669434666633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.574328601360321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.5877341032028198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.6138299107551575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.6529403328895569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.7002654671669006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7249437570571899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7640573978424072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7490408420562744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.7315987944602966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.7128663063049316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.6935480833053589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.673346221446991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.6573163866996765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.6448792815208435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.6358867287635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.6298044323921204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.6285462379455566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6331718564033508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.6705207228660583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.7059128284454346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.7762486934661865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.940438747406006
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 1.163193941116333
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 1.3220527172088623
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 1.3835108280181885
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 1.3937678337097168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 1.378846526145935
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 1.3554844856262207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 1.3317513465881348
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 1.3256334066390991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 1.3479914665222168
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 1.3992230892181396
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 1.4685345888137815
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 1.6024950742721558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 1.7275196313858032
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 1.84473717212677
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 1.9118090867996216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 1.957948088645935
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 2.016068458557129
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 2.032775402069092
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 2.02837872505188
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 2.044972419738769
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 2.127682685852051
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 2.2367944717407227
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 2.312802314758301
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 2.354966163635254
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 2.4679818153381348
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 2.5294549465179443
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 2.466498613357544
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 2.3415348529815674
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 2.2478249073028564
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 2.2072901725769043
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 2.2199714183807373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 2.252032995223999
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 2.250387191772461
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 2.2734193801879883
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 2.304410934448242
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 2.2630398273468018
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 2.203948736190796
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 2.115039587020874
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 2.0202016830444336
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 1.944169998168945
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 1.8834346532821653
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 1.8301467895507808
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 1.786118745803833
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 1.7673183679580688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 1.8090001344680784
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 1.783727526664734
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 1.7540894746780396
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 1.7416858673095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 1.6971136331558228
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 1.6260724067687988
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 1.5418496131896973
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 1.4676231145858765
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 1.4092254638671875
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 1.3584942817687988
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 1.310396432876587
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 1.2553503513336182
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 1.19445538520813
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 1.1355048418045044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 1.08400559425354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 1.0382492542266846
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 1.0001630783081057
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 1.035972237586975
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 1.0480924844741821
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 1.0766173601150513
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 1.100370168685913
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 1.1602063179016113
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 1.224572777748108
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 1.2933140993118286
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 1.369303584098816
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 1.4429198503494263
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 1.504311203956604
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 1.5702133178710938
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 1.6245230436325073
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 1.6630765199661255
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 1.7082908153533936
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 1.7321103811264038
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 1.762043833732605
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 1.7914752960205078
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 1.8194611072540283
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 1.869789481163025
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 1.8874316215515137
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 1.939592719078064
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 1.9858109951019287
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 2.037945508956909
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 2.0780093669891357
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 2.133552312850952
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 2.1735527515411377
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 2.218653917312622
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 2.2591805458068848
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 2.296020030975342
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 2.3444178104400635
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 2.3699824810028076
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 2.3799586296081543
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 2.394235610961914
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 2.3918991088867188
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 2.3802707195281982
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 2.3635995388031006
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 2.3524932861328125
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 2.3215701580047607
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 2.2833080291748047
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 2.2460572719573975
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 2.1952438354492188
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 2.1454436779022217
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 2.0949409008026123
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 2.03580641746521
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 1.9743709564208984
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 1.9142917394638062
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 1.848451018333435
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 1.7908250093460083
          }
        ]
      },
      "72": {
        "region": "east",
        "horizon": 72,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "LSTM",
        "window_size": 168,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.03877862334377191,
        "mape_test": 0.03877862334377191,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\LSTM\\bayes_h72_20251217T204621\\run_412556b0",
        "peak_swh": 2.334319591522217,
        "peak_lead_hour": 34,
        "risk_level": "medium",
        "risk_label": "中",
        "sea_state": "moderate",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.6837667226791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.6754394173622131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.665075421333313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.6540940403938293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.6421844959259033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.6279836297035217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.6145653128623962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.6014853715896606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.5887452960014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.5771024823188782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.5657435655593872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.5619327425956726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.5669434666633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.574328601360321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.5877341032028198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.6138299107551575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.6529403328895569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.7002654671669006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7249437570571899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7640573978424072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7490408420562744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.7315987944602966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.7128663063049316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.6935480833053589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.673346221446991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.6573163866996765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.6448792815208435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.6358867287635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.6298044323921204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.6285462379455566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6331718564033508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.6705207228660583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.7059128284454346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.7762486934661865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.940438747406006
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 1.163193941116333
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 1.3220527172088623
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 1.3835108280181885
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 1.3937678337097168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 1.378846526145935
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 1.3554844856262207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 1.3317513465881348
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 1.3256334066390991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 1.3479914665222168
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 1.3992230892181396
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 1.4685345888137815
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 1.6024950742721558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 1.7275196313858032
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 1.84473717212677
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 1.9118090867996216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 1.957948088645935
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 2.016068458557129
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 2.032775402069092
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 2.02837872505188
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 2.044972419738769
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 2.127682685852051
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 2.2367944717407227
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 2.312802314758301
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 2.354966163635254
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 2.4679818153381348
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 2.5294549465179443
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 2.466498613357544
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 2.3415348529815674
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 2.2478249073028564
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 2.2072901725769043
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 2.2199714183807373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 2.252032995223999
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 2.250387191772461
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 2.2734193801879883
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 2.304410934448242
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 2.2630398273468018
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 2.203948736190796
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 2.115039587020874
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 2.0202016830444336
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 1.944169998168945
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 1.8834346532821653
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 1.8301467895507808
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 1.786118745803833
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 1.7673183679580688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 1.8090001344680784
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 1.783727526664734
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 1.7540894746780396
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 1.7416858673095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 1.6971136331558228
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 1.6260724067687988
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 1.5418496131896973
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 1.4676231145858765
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 1.4092254638671875
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 1.3584942817687988
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 1.310396432876587
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 1.2553503513336182
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 1.19445538520813
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 1.1355048418045044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 1.08400559425354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 1.0382492542266846
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 1.0001630783081057
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 1.0752532482147217
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 1.0954266786575317
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 1.1297459602355957
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 1.1695424318313599
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 1.2191569805145264
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 1.271308183670044
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 1.3254153728485107
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 1.3814131021499634
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 1.4346638917922974
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 1.4886329174041748
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 1.5330449342727661
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 1.5709140300750732
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 1.6027085781097412
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 1.6288118362426758
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 1.6561198234558105
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 1.6823654174804688
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 1.710559368133545
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 1.746989369392395
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 1.7919719219207764
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 1.8426573276519775
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 1.8903089761734009
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 1.9436508417129517
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 1.9987938404083252
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 2.0596258640289307
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 2.118803024291992
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 2.1749649047851562
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 2.2213404178619385
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 2.2591476440429688
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 2.286513090133667
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 2.309497356414795
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 2.325035333633423
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 2.331533908843994
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 2.333425283432007
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 2.334319591522217
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 2.3232760429382324
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 2.302506685256958
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 2.2784736156463623
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 2.2521705627441406
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 2.220106840133667
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 2.178557872772217
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 2.1359920501708984
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 2.086780309677124
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 2.0279717445373535
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 1.9656665325164795
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 1.8989349603652954
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 1.83639395236969
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 1.7719790935516357
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 1.7087438106536865
          },
          {
            "lead_hour": 49,
            "time": "2026-05-03T00:00:00",
            "swh": 1.6512401103973389
          },
          {
            "lead_hour": 50,
            "time": "2026-05-03T01:00:00",
            "swh": 1.5914297103881836
          },
          {
            "lead_hour": 51,
            "time": "2026-05-03T02:00:00",
            "swh": 1.5343393087387085
          },
          {
            "lead_hour": 52,
            "time": "2026-05-03T03:00:00",
            "swh": 1.4758225679397583
          },
          {
            "lead_hour": 53,
            "time": "2026-05-03T04:00:00",
            "swh": 1.4210047721862793
          },
          {
            "lead_hour": 54,
            "time": "2026-05-03T05:00:00",
            "swh": 1.3720296621322632
          },
          {
            "lead_hour": 55,
            "time": "2026-05-03T06:00:00",
            "swh": 1.3266451358795166
          },
          {
            "lead_hour": 56,
            "time": "2026-05-03T07:00:00",
            "swh": 1.2826716899871826
          },
          {
            "lead_hour": 57,
            "time": "2026-05-03T08:00:00",
            "swh": 1.2477487325668335
          },
          {
            "lead_hour": 58,
            "time": "2026-05-03T09:00:00",
            "swh": 1.2105400562286377
          },
          {
            "lead_hour": 59,
            "time": "2026-05-03T10:00:00",
            "swh": 1.177820086479187
          },
          {
            "lead_hour": 60,
            "time": "2026-05-03T11:00:00",
            "swh": 1.1433104276657104
          },
          {
            "lead_hour": 61,
            "time": "2026-05-03T12:00:00",
            "swh": 1.1159428358078003
          },
          {
            "lead_hour": 62,
            "time": "2026-05-03T13:00:00",
            "swh": 1.0791993141174316
          },
          {
            "lead_hour": 63,
            "time": "2026-05-03T14:00:00",
            "swh": 1.043487310409546
          },
          {
            "lead_hour": 64,
            "time": "2026-05-03T15:00:00",
            "swh": 1.002340316772461
          },
          {
            "lead_hour": 65,
            "time": "2026-05-03T16:00:00",
            "swh": 0.9587234258651733
          },
          {
            "lead_hour": 66,
            "time": "2026-05-03T17:00:00",
            "swh": 0.9188587665557861
          },
          {
            "lead_hour": 67,
            "time": "2026-05-03T18:00:00",
            "swh": 0.878411591053009
          },
          {
            "lead_hour": 68,
            "time": "2026-05-03T19:00:00",
            "swh": 0.8381699323654175
          },
          {
            "lead_hour": 69,
            "time": "2026-05-03T20:00:00",
            "swh": 0.8025569915771484
          },
          {
            "lead_hour": 70,
            "time": "2026-05-03T21:00:00",
            "swh": 0.7676646113395691
          },
          {
            "lead_hour": 71,
            "time": "2026-05-03T22:00:00",
            "swh": 0.7369900941848755
          },
          {
            "lead_hour": 72,
            "time": "2026-05-03T23:00:00",
            "swh": 0.7119938731193542
          }
        ]
      },
      "96": {
        "region": "east",
        "horizon": 96,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 240,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.05085697114499543,
        "mape_test": 0.05085697114499543,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\east\\forecast\\VMD\\GRU\\bayes_h96_20251219T041258\\run_fec9fef9",
        "peak_swh": 2.418231964111328,
        "peak_lead_hour": 35,
        "risk_level": "medium",
        "risk_label": "中",
        "sea_state": "moderate",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.6837667226791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.6754394173622131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.665075421333313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.6540940403938293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.6421844959259033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.6279836297035217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.6145653128623962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.6014853715896606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.5887452960014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.5771024823188782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.5657435655593872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.5619327425956726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.5669434666633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.574328601360321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.5877341032028198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.6138299107551575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.6529403328895569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.7002654671669006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7249437570571899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7640573978424072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7490408420562744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.7315987944602966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.7128663063049316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.6935480833053589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.673346221446991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.6573163866996765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.6448792815208435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.6358867287635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.6298044323921204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.6285462379455566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6331718564033508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.6705207228660583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.7059128284454346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.7762486934661865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.940438747406006
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 1.163193941116333
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 1.3220527172088623
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 1.3835108280181885
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 1.3937678337097168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 1.378846526145935
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 1.3554844856262207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 1.3317513465881348
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 1.3256334066390991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 1.3479914665222168
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 1.3992230892181396
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 1.4685345888137815
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 1.6024950742721558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 1.7275196313858032
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 1.84473717212677
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 1.9118090867996216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 1.957948088645935
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 2.016068458557129
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 2.032775402069092
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 2.02837872505188
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 2.044972419738769
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 2.127682685852051
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 2.2367944717407227
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 2.312802314758301
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 2.354966163635254
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 2.4679818153381348
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 2.5294549465179443
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 2.466498613357544
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 2.3415348529815674
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 2.2478249073028564
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 2.2072901725769043
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 2.2199714183807373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 2.252032995223999
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 2.250387191772461
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 2.2734193801879883
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 2.304410934448242
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 2.2630398273468018
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 2.203948736190796
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 2.115039587020874
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 2.0202016830444336
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 1.944169998168945
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 1.8834346532821653
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 1.8301467895507808
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 1.786118745803833
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 1.7673183679580688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 1.8090001344680784
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 1.783727526664734
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 1.7540894746780396
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 1.7416858673095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 1.6971136331558228
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 1.6260724067687988
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 1.5418496131896973
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 1.4676231145858765
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 1.4092254638671875
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 1.3584942817687988
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 1.310396432876587
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 1.2553503513336182
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 1.19445538520813
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 1.1355048418045044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 1.08400559425354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 1.0382492542266846
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 1.0001630783081057
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 1.0437058210372925
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 1.0640921592712402
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 1.0981156826019287
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 1.1426851749420166
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 1.1976027488708496
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 1.2620391845703125
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 1.3191561698913574
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 1.3794169425964355
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 1.4364123344421387
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 1.4905327558517456
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 1.5431715250015259
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 1.5816222429275513
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 1.6153827905654907
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 1.6505581140518188
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 1.6901664733886719
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 1.7355962991714478
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 1.7755014896392822
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 1.8287392854690552
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 1.8793845176696777
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 1.918453335762024
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 1.9607564210891724
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 1.9965615272521973
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 2.0390498638153076
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 2.0740792751312256
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 2.1118252277374268
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 2.1542179584503174
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 2.184847354888916
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 2.2212390899658203
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 2.2594528198242188
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 2.294191360473633
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 2.328808307647705
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 2.3651952743530273
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 2.389594554901123
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 2.411088228225708
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 2.418231964111328
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 2.410045862197876
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 2.402261972427368
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 2.3856630325317383
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 2.354462146759033
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 2.3132007122039795
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 2.266209363937378
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 2.21622371673584
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 2.155473232269287
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 2.0991952419281006
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 2.0446600914001465
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 1.9846851825714111
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 1.9221642017364502
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 1.8630766868591309
          },
          {
            "lead_hour": 49,
            "time": "2026-05-03T00:00:00",
            "swh": 1.8000978231430054
          },
          {
            "lead_hour": 50,
            "time": "2026-05-03T01:00:00",
            "swh": 1.7341272830963135
          },
          {
            "lead_hour": 51,
            "time": "2026-05-03T02:00:00",
            "swh": 1.6790820360183716
          },
          {
            "lead_hour": 52,
            "time": "2026-05-03T03:00:00",
            "swh": 1.6318074464797974
          },
          {
            "lead_hour": 53,
            "time": "2026-05-03T04:00:00",
            "swh": 1.5777182579040527
          },
          {
            "lead_hour": 54,
            "time": "2026-05-03T05:00:00",
            "swh": 1.523728847503662
          },
          {
            "lead_hour": 55,
            "time": "2026-05-03T06:00:00",
            "swh": 1.4633281230926514
          },
          {
            "lead_hour": 56,
            "time": "2026-05-03T07:00:00",
            "swh": 1.397068977355957
          },
          {
            "lead_hour": 57,
            "time": "2026-05-03T08:00:00",
            "swh": 1.3306331634521484
          },
          {
            "lead_hour": 58,
            "time": "2026-05-03T09:00:00",
            "swh": 1.2705190181732178
          },
          {
            "lead_hour": 59,
            "time": "2026-05-03T10:00:00",
            "swh": 1.2004932165145874
          },
          {
            "lead_hour": 60,
            "time": "2026-05-03T11:00:00",
            "swh": 1.126686453819275
          },
          {
            "lead_hour": 61,
            "time": "2026-05-03T12:00:00",
            "swh": 1.060354232788086
          },
          {
            "lead_hour": 62,
            "time": "2026-05-03T13:00:00",
            "swh": 0.9991355538368225
          },
          {
            "lead_hour": 63,
            "time": "2026-05-03T14:00:00",
            "swh": 0.9363684058189392
          },
          {
            "lead_hour": 64,
            "time": "2026-05-03T15:00:00",
            "swh": 0.8880245089530945
          },
          {
            "lead_hour": 65,
            "time": "2026-05-03T16:00:00",
            "swh": 0.8460167050361633
          },
          {
            "lead_hour": 66,
            "time": "2026-05-03T17:00:00",
            "swh": 0.807167649269104
          },
          {
            "lead_hour": 67,
            "time": "2026-05-03T18:00:00",
            "swh": 0.7677431702613831
          },
          {
            "lead_hour": 68,
            "time": "2026-05-03T19:00:00",
            "swh": 0.743428111076355
          },
          {
            "lead_hour": 69,
            "time": "2026-05-03T20:00:00",
            "swh": 0.7189967036247253
          },
          {
            "lead_hour": 70,
            "time": "2026-05-03T21:00:00",
            "swh": 0.7013960480690002
          },
          {
            "lead_hour": 71,
            "time": "2026-05-03T22:00:00",
            "swh": 0.6749840974807739
          },
          {
            "lead_hour": 72,
            "time": "2026-05-03T23:00:00",
            "swh": 0.6563286185264587
          },
          {
            "lead_hour": 73,
            "time": "2026-05-04T00:00:00",
            "swh": 0.6398561000823975
          },
          {
            "lead_hour": 74,
            "time": "2026-05-04T01:00:00",
            "swh": 0.6254615783691406
          },
          {
            "lead_hour": 75,
            "time": "2026-05-04T02:00:00",
            "swh": 0.6157331466674805
          },
          {
            "lead_hour": 76,
            "time": "2026-05-04T03:00:00",
            "swh": 0.6012002825737
          },
          {
            "lead_hour": 77,
            "time": "2026-05-04T04:00:00",
            "swh": 0.5819199681282043
          },
          {
            "lead_hour": 78,
            "time": "2026-05-04T05:00:00",
            "swh": 0.5671082139015198
          },
          {
            "lead_hour": 79,
            "time": "2026-05-04T06:00:00",
            "swh": 0.562886655330658
          },
          {
            "lead_hour": 80,
            "time": "2026-05-04T07:00:00",
            "swh": 0.549733579158783
          },
          {
            "lead_hour": 81,
            "time": "2026-05-04T08:00:00",
            "swh": 0.5389919281005859
          },
          {
            "lead_hour": 82,
            "time": "2026-05-04T09:00:00",
            "swh": 0.5349004864692688
          },
          {
            "lead_hour": 83,
            "time": "2026-05-04T10:00:00",
            "swh": 0.5380511283874512
          },
          {
            "lead_hour": 84,
            "time": "2026-05-04T11:00:00",
            "swh": 0.5432873964309692
          },
          {
            "lead_hour": 85,
            "time": "2026-05-04T12:00:00",
            "swh": 0.5498496294021606
          },
          {
            "lead_hour": 86,
            "time": "2026-05-04T13:00:00",
            "swh": 0.5493319630622864
          },
          {
            "lead_hour": 87,
            "time": "2026-05-04T14:00:00",
            "swh": 0.546686589717865
          },
          {
            "lead_hour": 88,
            "time": "2026-05-04T15:00:00",
            "swh": 0.5518894195556641
          },
          {
            "lead_hour": 89,
            "time": "2026-05-04T16:00:00",
            "swh": 0.557098388671875
          },
          {
            "lead_hour": 90,
            "time": "2026-05-04T17:00:00",
            "swh": 0.5609323978424072
          },
          {
            "lead_hour": 91,
            "time": "2026-05-04T18:00:00",
            "swh": 0.5666475892066956
          },
          {
            "lead_hour": 92,
            "time": "2026-05-04T19:00:00",
            "swh": 0.5774112939834595
          },
          {
            "lead_hour": 93,
            "time": "2026-05-04T20:00:00",
            "swh": 0.5791870355606079
          },
          {
            "lead_hour": 94,
            "time": "2026-05-04T21:00:00",
            "swh": 0.5988656282424927
          },
          {
            "lead_hour": 95,
            "time": "2026-05-04T22:00:00",
            "swh": 0.6138250827789307
          },
          {
            "lead_hour": 96,
            "time": "2026-05-04T23:00:00",
            "swh": 0.6314871311187744
          }
        ]
      }
    },
    "south": {
      "48": {
        "region": "south",
        "horizon": 48,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "LSTM",
        "window_size": 128,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.02831280236544703,
        "mape_test": 0.02831280236544703,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h48_20251221T011926\\run_05d38226",
        "peak_swh": 0.8678314685821533,
        "peak_lead_hour": 1,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "slight",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.8185323476791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.8147216439247131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.810949444770813
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.8037522435188293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.7948944568634033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.7874074578285217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.7815575003623962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.7748252153396606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.8270265460014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.8219755291938782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.8147670030593872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.8104678988456726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.8081544041633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.806262195110321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.8067282438278198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.8076775670051575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.8057723641395569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.8006072640419006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7940355539321899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7852976322174072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7744314670562744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.7630929350852966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.7514405250549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.7409113645553589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.729498565196991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.7195722460746765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.7127503752708435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.7081523537635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.7054880261421204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.7003235816955566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6915214657783508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.6807746291160583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.6705124378204346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.6622350215911865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.6513762474060059
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.6451274752616882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.6384590268135071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.6332666277885437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.6296076774597168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.6278699636459351
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.6264805793762207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.6254525780677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.6271470785140991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.6324153542518616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.6729046702384949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.6948529481887817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.6986864805221558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.7040820717811584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.70948326587677
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.7174731492996216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.7279676198959351
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.7397012114524841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.748351514339447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.7554295659065247
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.7612811326980591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.7646456360816956
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.7636498808860779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.7595797777175903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.7521828413009644
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.74703449010849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.7406365275382996
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.7338326573371887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.7263004183769226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.7180396914482117
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.7094873785972595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.7001960277557373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.6909977793693542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.6834927797317505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.6728333234786987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.6640300750732422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.6524441242218018
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.6460873484611511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.6404302716255188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.6342154741287231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.6272754073143005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.6204952001571655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.613838255405426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.6074077486991882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.6027675867080688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.6014806032180786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.6062372922897339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.6195679903030396
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.6274280548095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.6495062112808228
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.679783284664154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.7168983817100525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.7544883489608765
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.7915496230125427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.811375081539154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.8140584826469421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.8056432604789734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.7979710698127747
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.8457099199295044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.84523606300354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.8539230823516846
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.8756513595581055
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.8678314685821533
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.8547499179840088
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.8470581769943237
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.8342728614807129
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.8173760771751404
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.8050765991210938
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.7959553003311157
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.7880979180335999
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.7747573256492615
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.7522479891777039
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.7267371416091919
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.7008276581764221
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.674672544002533
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.6495840549468994
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.6302797794342041
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.6177027821540833
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.6072032451629639
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.6051992774009705
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.6095472574234009
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.6189502477645874
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.631733775138855
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.6414450407028198
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.6480059027671814
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.6572454571723938
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.6587355732917786
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.6594082713127136
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.6624453067779541
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.6665294170379639
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.6689021587371826
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.676949143409729
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.6832848787307739
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.6908056735992432
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.6978970170021057
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.7053540945053101
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.7111561298370361
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.7173805236816406
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.7243715524673462
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.7235788106918335
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.7268842458724976
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.7315126657485962
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.7334092855453491
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.7354264259338379
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.7338167428970337
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.7282192707061768
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.7235954999923706
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.714884340763092
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.7061347961425781
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.6937164068222046
          }
        ]
      },
      "72": {
        "region": "south",
        "horizon": 72,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "LSTM",
        "window_size": 208,
        "mode_count": 9,
        "mode_scaling": "none",
        "selection_score": 0.038381207198606895,
        "mape_test": 0.038381207198606895,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\LSTM\\bayes_h72_20251221T142612\\run_cd292818",
        "peak_swh": 0.9352291822433472,
        "peak_lead_hour": 48,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "slight",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.8185323476791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.8147216439247131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.810949444770813
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.8037522435188293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.7948944568634033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.7874074578285217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.7815575003623962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.7748252153396606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.8270265460014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.8219755291938782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.8147670030593872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.8104678988456726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.8081544041633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.806262195110321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.8067282438278198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.8076775670051575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.8057723641395569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.8006072640419006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7940355539321899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7852976322174072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7744314670562744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.7630929350852966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.7514405250549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.7409113645553589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.729498565196991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.7195722460746765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.7127503752708435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.7081523537635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.7054880261421204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.7003235816955566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6915214657783508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.6807746291160583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.6705124378204346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.6622350215911865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.6513762474060059
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.6451274752616882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.6384590268135071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.6332666277885437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.6296076774597168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.6278699636459351
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.6264805793762207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.6254525780677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.6271470785140991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.6324153542518616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.6729046702384949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.6948529481887817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.6986864805221558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.7040820717811584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.70948326587677
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.7174731492996216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.7279676198959351
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.7397012114524841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.748351514339447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.7554295659065247
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.7612811326980591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.7646456360816956
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.7636498808860779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.7595797777175903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.7521828413009644
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.74703449010849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.7406365275382996
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.7338326573371887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.7263004183769226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.7180396914482117
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.7094873785972595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.7001960277557373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.6909977793693542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.6834927797317505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.6728333234786987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.6640300750732422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.6524441242218018
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.6460873484611511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.6404302716255188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.6342154741287231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.6272754073143005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.6204952001571655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.613838255405426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.6074077486991882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.6027675867080688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.6014806032180786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.6062372922897339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.6195679903030396
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.6274280548095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.6495062112808228
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.679783284664154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.7168983817100525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.7544883489608765
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.7915496230125427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.811375081539154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.8140584826469421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.8056432604789734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.7979710698127747
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.8457099199295044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.84523606300354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.8539230823516846
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.8756513595581055
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.8583887815475464
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.8465784788131714
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.8337311744689941
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.8293374180793762
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.8338703513145447
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.8511627912521362
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.8632094860076904
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.8722190856933594
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.8748863935470581
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.8621006011962891
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.8336310386657715
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.791917622089386
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.7476791739463806
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.6997029781341553
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.6517131328582764
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.6148366928100586
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.5873017311096191
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.5780516862869263
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.5760881304740906
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.5840262174606323
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.5946110486984253
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.6064305901527405
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.6134139895439148
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.6156565546989441
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.610586941242218
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.5960096716880798
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.5899717807769775
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.5815105438232422
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.5688740611076355
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.5653232336044312
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.5660795569419861
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.5742084980010986
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.5839515924453735
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.5932510495185852
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.602239727973938
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.6166224479675293
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.6330963373184204
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.6612685322761536
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.6896940469741821
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.7220662832260132
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.7568873167037964
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.7928016781806946
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.8293917179107666
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.8657715320587158
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.8947250843048096
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.9168027639389038
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.9307077527046204
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.9352291822433472
          },
          {
            "lead_hour": 49,
            "time": "2026-05-03T00:00:00",
            "swh": 0.9308239817619324
          },
          {
            "lead_hour": 50,
            "time": "2026-05-03T01:00:00",
            "swh": 0.9156249761581421
          },
          {
            "lead_hour": 51,
            "time": "2026-05-03T02:00:00",
            "swh": 0.9006059765815735
          },
          {
            "lead_hour": 52,
            "time": "2026-05-03T03:00:00",
            "swh": 0.8850544095039368
          },
          {
            "lead_hour": 53,
            "time": "2026-05-03T04:00:00",
            "swh": 0.8598460555076599
          },
          {
            "lead_hour": 54,
            "time": "2026-05-03T05:00:00",
            "swh": 0.8349583745002747
          },
          {
            "lead_hour": 55,
            "time": "2026-05-03T06:00:00",
            "swh": 0.8047062754631042
          },
          {
            "lead_hour": 56,
            "time": "2026-05-03T07:00:00",
            "swh": 0.7742152214050293
          },
          {
            "lead_hour": 57,
            "time": "2026-05-03T08:00:00",
            "swh": 0.7453740835189819
          },
          {
            "lead_hour": 58,
            "time": "2026-05-03T09:00:00",
            "swh": 0.7183186411857605
          },
          {
            "lead_hour": 59,
            "time": "2026-05-03T10:00:00",
            "swh": 0.6949332356452942
          },
          {
            "lead_hour": 60,
            "time": "2026-05-03T11:00:00",
            "swh": 0.6727581024169922
          },
          {
            "lead_hour": 61,
            "time": "2026-05-03T12:00:00",
            "swh": 0.6521041393280029
          },
          {
            "lead_hour": 62,
            "time": "2026-05-03T13:00:00",
            "swh": 0.6286923885345459
          },
          {
            "lead_hour": 63,
            "time": "2026-05-03T14:00:00",
            "swh": 0.6110183000564575
          },
          {
            "lead_hour": 64,
            "time": "2026-05-03T15:00:00",
            "swh": 0.5987423658370972
          },
          {
            "lead_hour": 65,
            "time": "2026-05-03T16:00:00",
            "swh": 0.5899312496185303
          },
          {
            "lead_hour": 66,
            "time": "2026-05-03T17:00:00",
            "swh": 0.5902784466743469
          },
          {
            "lead_hour": 67,
            "time": "2026-05-03T18:00:00",
            "swh": 0.5860790014266968
          },
          {
            "lead_hour": 68,
            "time": "2026-05-03T19:00:00",
            "swh": 0.5878148674964905
          },
          {
            "lead_hour": 69,
            "time": "2026-05-03T20:00:00",
            "swh": 0.5887580513954163
          },
          {
            "lead_hour": 70,
            "time": "2026-05-03T21:00:00",
            "swh": 0.5927817225456238
          },
          {
            "lead_hour": 71,
            "time": "2026-05-03T22:00:00",
            "swh": 0.5952754020690918
          },
          {
            "lead_hour": 72,
            "time": "2026-05-03T23:00:00",
            "swh": 0.5940368175506592
          }
        ]
      },
      "96": {
        "region": "south",
        "horizon": 96,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "TRANSFORMER",
        "window_size": 264,
        "mode_count": 9,
        "mode_scaling": "none",
        "selection_score": 0.0565508821960269,
        "mape_test": 0.0565508821960269,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\south\\forecast\\VMD\\TRANSFORMER\\bayes_h96_20251224T150319\\run_9ea7cec4",
        "peak_swh": 0.844038188457489,
        "peak_lead_hour": 1,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "slight",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.8185323476791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.8147216439247131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.810949444770813
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.8037522435188293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.7948944568634033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.7874074578285217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.7815575003623962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.7748252153396606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.8270265460014343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.8219755291938782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.8147670030593872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.8104678988456726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.8081544041633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.806262195110321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 0.8067282438278198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 0.8076775670051575
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 0.8057723641395569
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 0.8006072640419006
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 0.7940355539321899
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 0.7852976322174072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 0.7744314670562744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.7630929350852966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.7514405250549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.7409113645553589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.729498565196991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.7195722460746765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.7127503752708435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.7081523537635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.7054880261421204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.7003235816955566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6915214657783508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.6807746291160583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.6705124378204346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.6622350215911865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.6513762474060059
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.6451274752616882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.6384590268135071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.6332666277885437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.6296076774597168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.6278699636459351
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.6264805793762207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.6254525780677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.6271470785140991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.6324153542518616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.6729046702384949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.6948529481887817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.6986864805221558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.7040820717811584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.70948326587677
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.7174731492996216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.7279676198959351
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.7397012114524841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.748351514339447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.7554295659065247
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.7612811326980591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.7646456360816956
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.7636498808860779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.7595797777175903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.7521828413009644
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.74703449010849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.7406365275382996
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.7338326573371887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.7263004183769226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.7180396914482117
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.7094873785972595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.7001960277557373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.6909977793693542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.6834927797317505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.6728333234786987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.6640300750732422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.6524441242218018
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.6460873484611511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.6404302716255188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.6342154741287231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.6272754073143005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.6204952001571655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.613838255405426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.6074077486991882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.6027675867080688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.6014806032180786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.6062372922897339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.6195679903030396
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.6274280548095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.6495062112808228
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.679783284664154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.7168983817100525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.7544883489608765
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.7915496230125427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.811375081539154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.8140584826469421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.8056432604789734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.7979710698127747
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.8457099199295044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.84523606300354
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.8539230823516846
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.8756513595581055
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.844038188457489
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.8402136564254761
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.8287584781646729
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.8204916715621948
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.8102388381958008
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.7996388673782349
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.7909846901893616
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.7721753716468811
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.7567582726478577
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.7385227084159851
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.7203966975212097
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.701574981212616
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.6825026273727417
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.6665594577789307
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.6499631404876709
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.6356909275054932
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.6183772683143616
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.6069908142089844
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.6039690375328064
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.596028208732605
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.5941466093063354
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.5934078097343445
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.5857899188995361
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.5913581848144531
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.5929928421974182
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.5963059067726135
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.6015083193778992
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.6059352159500122
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.6141741871833801
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.6202834248542786
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.6288644075393677
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.6344005465507507
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.640750527381897
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.648938775062561
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.6582266092300415
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.6641583442687988
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.6708172559738159
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.671368420124054
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.6826236844062805
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.6849987506866455
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.6932602524757385
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.6948877573013306
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.7006519436836243
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.7008055448532104
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.7084095478057861
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.7078292965888977
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.7023265957832336
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.7097046375274658
          },
          {
            "lead_hour": 49,
            "time": "2026-05-03T00:00:00",
            "swh": 0.7114191055297852
          },
          {
            "lead_hour": 50,
            "time": "2026-05-03T01:00:00",
            "swh": 0.7128522992134094
          },
          {
            "lead_hour": 51,
            "time": "2026-05-03T02:00:00",
            "swh": 0.7146663665771484
          },
          {
            "lead_hour": 52,
            "time": "2026-05-03T03:00:00",
            "swh": 0.7159067392349243
          },
          {
            "lead_hour": 53,
            "time": "2026-05-03T04:00:00",
            "swh": 0.7144298553466797
          },
          {
            "lead_hour": 54,
            "time": "2026-05-03T05:00:00",
            "swh": 0.7188177704811096
          },
          {
            "lead_hour": 55,
            "time": "2026-05-03T06:00:00",
            "swh": 0.7139095664024353
          },
          {
            "lead_hour": 56,
            "time": "2026-05-03T07:00:00",
            "swh": 0.7139277458190918
          },
          {
            "lead_hour": 57,
            "time": "2026-05-03T08:00:00",
            "swh": 0.7077631950378418
          },
          {
            "lead_hour": 58,
            "time": "2026-05-03T09:00:00",
            "swh": 0.7135002017021179
          },
          {
            "lead_hour": 59,
            "time": "2026-05-03T10:00:00",
            "swh": 0.7161803245544434
          },
          {
            "lead_hour": 60,
            "time": "2026-05-03T11:00:00",
            "swh": 0.7150025963783264
          },
          {
            "lead_hour": 61,
            "time": "2026-05-03T12:00:00",
            "swh": 0.7103006839752197
          },
          {
            "lead_hour": 62,
            "time": "2026-05-03T13:00:00",
            "swh": 0.7094687223434448
          },
          {
            "lead_hour": 63,
            "time": "2026-05-03T14:00:00",
            "swh": 0.7136334180831909
          },
          {
            "lead_hour": 64,
            "time": "2026-05-03T15:00:00",
            "swh": 0.715402364730835
          },
          {
            "lead_hour": 65,
            "time": "2026-05-03T16:00:00",
            "swh": 0.7174569368362427
          },
          {
            "lead_hour": 66,
            "time": "2026-05-03T17:00:00",
            "swh": 0.7202636003494263
          },
          {
            "lead_hour": 67,
            "time": "2026-05-03T18:00:00",
            "swh": 0.7182872295379639
          },
          {
            "lead_hour": 68,
            "time": "2026-05-03T19:00:00",
            "swh": 0.7149229645729065
          },
          {
            "lead_hour": 69,
            "time": "2026-05-03T20:00:00",
            "swh": 0.7198182940483093
          },
          {
            "lead_hour": 70,
            "time": "2026-05-03T21:00:00",
            "swh": 0.7226753234863281
          },
          {
            "lead_hour": 71,
            "time": "2026-05-03T22:00:00",
            "swh": 0.7258375883102417
          },
          {
            "lead_hour": 72,
            "time": "2026-05-03T23:00:00",
            "swh": 0.7318413853645325
          },
          {
            "lead_hour": 73,
            "time": "2026-05-04T00:00:00",
            "swh": 0.7314169406890869
          },
          {
            "lead_hour": 74,
            "time": "2026-05-04T01:00:00",
            "swh": 0.7248221635818481
          },
          {
            "lead_hour": 75,
            "time": "2026-05-04T02:00:00",
            "swh": 0.7297844886779785
          },
          {
            "lead_hour": 76,
            "time": "2026-05-04T03:00:00",
            "swh": 0.7295169830322266
          },
          {
            "lead_hour": 77,
            "time": "2026-05-04T04:00:00",
            "swh": 0.7347184419631958
          },
          {
            "lead_hour": 78,
            "time": "2026-05-04T05:00:00",
            "swh": 0.7332122325897217
          },
          {
            "lead_hour": 79,
            "time": "2026-05-04T06:00:00",
            "swh": 0.733622670173645
          },
          {
            "lead_hour": 80,
            "time": "2026-05-04T07:00:00",
            "swh": 0.7374396920204163
          },
          {
            "lead_hour": 81,
            "time": "2026-05-04T08:00:00",
            "swh": 0.7386229634284973
          },
          {
            "lead_hour": 82,
            "time": "2026-05-04T09:00:00",
            "swh": 0.743195652961731
          },
          {
            "lead_hour": 83,
            "time": "2026-05-04T10:00:00",
            "swh": 0.7415156960487366
          },
          {
            "lead_hour": 84,
            "time": "2026-05-04T11:00:00",
            "swh": 0.7495095133781433
          },
          {
            "lead_hour": 85,
            "time": "2026-05-04T12:00:00",
            "swh": 0.7460007071495056
          },
          {
            "lead_hour": 86,
            "time": "2026-05-04T13:00:00",
            "swh": 0.7474181056022644
          },
          {
            "lead_hour": 87,
            "time": "2026-05-04T14:00:00",
            "swh": 0.7447422742843628
          },
          {
            "lead_hour": 88,
            "time": "2026-05-04T15:00:00",
            "swh": 0.7507319450378418
          },
          {
            "lead_hour": 89,
            "time": "2026-05-04T16:00:00",
            "swh": 0.7536424398422241
          },
          {
            "lead_hour": 90,
            "time": "2026-05-04T17:00:00",
            "swh": 0.7531872987747192
          },
          {
            "lead_hour": 91,
            "time": "2026-05-04T18:00:00",
            "swh": 0.7512274384498596
          },
          {
            "lead_hour": 92,
            "time": "2026-05-04T19:00:00",
            "swh": 0.7527703046798706
          },
          {
            "lead_hour": 93,
            "time": "2026-05-04T20:00:00",
            "swh": 0.7569235563278198
          },
          {
            "lead_hour": 94,
            "time": "2026-05-04T21:00:00",
            "swh": 0.7562536597251892
          },
          {
            "lead_hour": 95,
            "time": "2026-05-04T22:00:00",
            "swh": 0.7542684078216553
          },
          {
            "lead_hour": 96,
            "time": "2026-05-04T23:00:00",
            "swh": 0.7589588165283203
          }
        ]
      }
    },
    "yellow": {
      "48": {
        "region": "yellow",
        "horizon": 48,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "TRANSFORMER",
        "window_size": 116,
        "mode_count": 9,
        "mode_scaling": "none",
        "selection_score": 0.041715322848743505,
        "mape_test": 0.041715322848743505,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\TRANSFORMER\\bayes_h48_20251216T090214\\run_f5d287da",
        "peak_swh": 0.6173709034919739,
        "peak_lead_hour": 48,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "slight",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.4835714101791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.4754882454872131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.497594952583313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.5749924778938293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.6940643787384033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.8267140984535217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.8770164847373962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.8641806840896606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.8692628741264343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.8642118573188782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.8301478624343872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.8536807894706726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.9175294041633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.975939929485321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 1.0706442594528198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 1.1890251636505127
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 1.257188320159912
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 1.256417751312256
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 1.19686758518219
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 1.1205027103424072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 1.0486013889312744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.9916085600852966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.9418702125549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.8851984739303589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.834967315196991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.7962324023246765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.7649964690208435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.7403789162635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.7198923230171204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.7015442848205566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6942070126533508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.7017707228660583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.7142136096954346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.7237584590911865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.7226653099060059
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.7137309908866882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.7031562924385071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.7077295184135437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.7226252555847168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.7462781667709351
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.7749180793762207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.8051400780677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.8263658285140991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.8301692605018616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.8171917796134949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.7888470888137817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.7528856992721558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.7028613686561584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.65406334400177
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.6085864305496216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.5670789480209351
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.5299844145774841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.497130811214447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.4673436284065246
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.4404803514480591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.4177218079566955
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.3971948027610779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.3787204027175903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.3576515913009643
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.34566730260849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.3343865275382995
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.3253853917121887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.3215152621269226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.3186256289482116
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.3173975348472595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.3188483715057373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.3177067637443542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.3204556703567505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.3303040266036987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.3415203094482422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.3436062633991241
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.3433529734611511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.3430669903755188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.3402701616287231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.3430957198143005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.3497432470321655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.359199583530426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.3732768893241882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.3940273523330688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.4249669313430786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.4577997922897339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.4828492403030395
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.4741077423095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.4642034769058227
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.451267659664154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.4363808035850525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.4263633489608764
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.4228972792625427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.425144612789154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.4275838732719421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.4308874011039734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.4393284916877746
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.4533759355545044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.46608567237854
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.4642746448516845
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.4652509689331054
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.4833698868751526
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.4828982651233673
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.4842616021633148
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.4858401417732239
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.4783152937889099
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.4775923490524292
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.4738939106464386
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.46573108434677124
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.4677952826023102
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.4729122519493103
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.4759712517261505
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.49482595920562744
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.5104856491088867
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.5138049721717834
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.5184851884841919
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.5148326754570007
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.5027549266815186
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.488459050655365
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.46529412269592285
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.44820016622543335
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.4218578338623047
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.40606313943862915
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.39331623911857605
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.37517213821411133
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.3728758692741394
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.36876434087753296
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.36160188913345337
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.3611248731613159
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.35559573769569397
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.35729750990867615
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.3563683032989502
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.35682228207588196
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.355404257774353
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.36084863543510437
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.357622891664505
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.3634563684463501
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.3743528723716736
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.37750983238220215
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.3947827219963074
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.4120939373970032
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.4373769462108612
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.4482039213180542
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.4682254195213318
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.49011921882629395
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.5229415893554688
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.554065465927124
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.5861034393310547
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.6173709034919739
          }
        ]
      },
      "72": {
        "region": "yellow",
        "horizon": 72,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 160,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.046885039371552126,
        "mape_test": 0.046885039371552126,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h72_20251215T082626\\run_faa4b156",
        "peak_swh": 0.9175350666046143,
        "peak_lead_hour": 72,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "slight",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.4835714101791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.4754882454872131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.497594952583313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.5749924778938293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.6940643787384033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.8267140984535217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.8770164847373962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.8641806840896606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.8692628741264343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.8642118573188782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.8301478624343872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.8536807894706726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.9175294041633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.975939929485321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 1.0706442594528198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 1.1890251636505127
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 1.257188320159912
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 1.256417751312256
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 1.19686758518219
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 1.1205027103424072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 1.0486013889312744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.9916085600852966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.9418702125549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.8851984739303589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.834967315196991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.7962324023246765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.7649964690208435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.7403789162635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.7198923230171204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.7015442848205566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6942070126533508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.7017707228660583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.7142136096954346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.7237584590911865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.7226653099060059
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.7137309908866882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.7031562924385071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.7077295184135437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.7226252555847168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.7462781667709351
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.7749180793762207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.8051400780677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.8263658285140991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.8301692605018616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.8171917796134949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.7888470888137817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.7528856992721558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.7028613686561584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.65406334400177
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.6085864305496216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.5670789480209351
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.5299844145774841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.497130811214447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.4673436284065246
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.4404803514480591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.4177218079566955
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.3971948027610779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.3787204027175903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.3576515913009643
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.34566730260849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.3343865275382995
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.3253853917121887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.3215152621269226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.3186256289482116
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.3173975348472595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.3188483715057373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.3177067637443542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.3204556703567505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.3303040266036987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.3415203094482422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.3436062633991241
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.3433529734611511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.3430669903755188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.3402701616287231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.3430957198143005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.3497432470321655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.359199583530426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.3732768893241882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.3940273523330688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.4249669313430786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.4577997922897339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.4828492403030395
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.4741077423095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.4642034769058227
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.451267659664154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.4363808035850525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.4263633489608764
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.4228972792625427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.425144612789154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.4275838732719421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.4308874011039734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.4393284916877746
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.4533759355545044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.46608567237854
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.4642746448516845
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.4652509689331054
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.4799613952636719
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.4815940260887146
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.4786021113395691
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.46953263878822327
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.45862722396850586
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.4443436861038208
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.43654757738113403
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.44105064868927
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.44632241129875183
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.452846884727478
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.46005237102508545
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.4713507294654846
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.47770071029663086
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.47606420516967773
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.46581172943115234
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.45221710205078125
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.4358925521373749
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.41398561000823975
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.39516621828079224
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.3800536096096039
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.3677751123905182
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.35722339153289795
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.352213978767395
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.35126060247421265
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.34984585642814636
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.3489153981208801
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.3504479229450226
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.35094934701919556
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.35265445709228516
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.35705462098121643
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.357532262802124
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.35952839255332947
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.36046868562698364
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.35983121395111084
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.3532148003578186
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.3423507809638977
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.34156596660614014
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.34739935398101807
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.362016499042511
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.38617441058158875
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.4142179489135742
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.4498000741004944
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.4910181164741516
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.5338569283485413
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.5857782363891602
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.637602686882019
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.6802970767021179
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.7182720303535461
          },
          {
            "lead_hour": 49,
            "time": "2026-05-03T00:00:00",
            "swh": 0.7512681484222412
          },
          {
            "lead_hour": 50,
            "time": "2026-05-03T01:00:00",
            "swh": 0.7755308747291565
          },
          {
            "lead_hour": 51,
            "time": "2026-05-03T02:00:00",
            "swh": 0.7894295454025269
          },
          {
            "lead_hour": 52,
            "time": "2026-05-03T03:00:00",
            "swh": 0.798222541809082
          },
          {
            "lead_hour": 53,
            "time": "2026-05-03T04:00:00",
            "swh": 0.7967276573181152
          },
          {
            "lead_hour": 54,
            "time": "2026-05-03T05:00:00",
            "swh": 0.7913918495178223
          },
          {
            "lead_hour": 55,
            "time": "2026-05-03T06:00:00",
            "swh": 0.7835984230041504
          },
          {
            "lead_hour": 56,
            "time": "2026-05-03T07:00:00",
            "swh": 0.7780136466026306
          },
          {
            "lead_hour": 57,
            "time": "2026-05-03T08:00:00",
            "swh": 0.7760881781578064
          },
          {
            "lead_hour": 58,
            "time": "2026-05-03T09:00:00",
            "swh": 0.776648759841919
          },
          {
            "lead_hour": 59,
            "time": "2026-05-03T10:00:00",
            "swh": 0.7785254120826721
          },
          {
            "lead_hour": 60,
            "time": "2026-05-03T11:00:00",
            "swh": 0.779387891292572
          },
          {
            "lead_hour": 61,
            "time": "2026-05-03T12:00:00",
            "swh": 0.7838430404663086
          },
          {
            "lead_hour": 62,
            "time": "2026-05-03T13:00:00",
            "swh": 0.7901936769485474
          },
          {
            "lead_hour": 63,
            "time": "2026-05-03T14:00:00",
            "swh": 0.7962762713432312
          },
          {
            "lead_hour": 64,
            "time": "2026-05-03T15:00:00",
            "swh": 0.7980433106422424
          },
          {
            "lead_hour": 65,
            "time": "2026-05-03T16:00:00",
            "swh": 0.8040893077850342
          },
          {
            "lead_hour": 66,
            "time": "2026-05-03T17:00:00",
            "swh": 0.8112857937812805
          },
          {
            "lead_hour": 67,
            "time": "2026-05-03T18:00:00",
            "swh": 0.8237374424934387
          },
          {
            "lead_hour": 68,
            "time": "2026-05-03T19:00:00",
            "swh": 0.8348485231399536
          },
          {
            "lead_hour": 69,
            "time": "2026-05-03T20:00:00",
            "swh": 0.8487331867218018
          },
          {
            "lead_hour": 70,
            "time": "2026-05-03T21:00:00",
            "swh": 0.86984783411026
          },
          {
            "lead_hour": 71,
            "time": "2026-05-03T22:00:00",
            "swh": 0.8930656909942627
          },
          {
            "lead_hour": 72,
            "time": "2026-05-03T23:00:00",
            "swh": 0.9175350666046143
          }
        ]
      },
      "96": {
        "region": "yellow",
        "horizon": 96,
        "issued_at": "2026-04-30T23:00:00",
        "method": "VMD",
        "model_type": "GRU",
        "window_size": 192,
        "mode_count": 10,
        "mode_scaling": "none",
        "selection_score": 0.05653362660475795,
        "mape_test": 0.05653362660475795,
        "run_dir": "E:\\PycharmProjects\\graduation\\output\\yellow\\forecast\\VMD\\GRU\\bayes_h96_20251215T195021\\run_abae115b",
        "peak_swh": 1.053452968597412,
        "peak_lead_hour": 80,
        "risk_level": "low",
        "risk_label": "低",
        "sea_state": "slight",
        "basis": "forecast_peak_swh_wmo_sea_state_bands",
        "observed": [
          {
            "lead_hour": -95,
            "time": "2026-04-27T00:00:00",
            "swh": 0.4835714101791382
          },
          {
            "lead_hour": -94,
            "time": "2026-04-27T01:00:00",
            "swh": 0.4754882454872131
          },
          {
            "lead_hour": -93,
            "time": "2026-04-27T02:00:00",
            "swh": 0.497594952583313
          },
          {
            "lead_hour": -92,
            "time": "2026-04-27T03:00:00",
            "swh": 0.5749924778938293
          },
          {
            "lead_hour": -91,
            "time": "2026-04-27T04:00:00",
            "swh": 0.6940643787384033
          },
          {
            "lead_hour": -90,
            "time": "2026-04-27T05:00:00",
            "swh": 0.8267140984535217
          },
          {
            "lead_hour": -89,
            "time": "2026-04-27T06:00:00",
            "swh": 0.8770164847373962
          },
          {
            "lead_hour": -88,
            "time": "2026-04-27T07:00:00",
            "swh": 0.8641806840896606
          },
          {
            "lead_hour": -87,
            "time": "2026-04-27T08:00:00",
            "swh": 0.8692628741264343
          },
          {
            "lead_hour": -86,
            "time": "2026-04-27T09:00:00",
            "swh": 0.8642118573188782
          },
          {
            "lead_hour": -85,
            "time": "2026-04-27T10:00:00",
            "swh": 0.8301478624343872
          },
          {
            "lead_hour": -84,
            "time": "2026-04-27T11:00:00",
            "swh": 0.8536807894706726
          },
          {
            "lead_hour": -83,
            "time": "2026-04-27T12:00:00",
            "swh": 0.9175294041633606
          },
          {
            "lead_hour": -82,
            "time": "2026-04-27T13:00:00",
            "swh": 0.975939929485321
          },
          {
            "lead_hour": -81,
            "time": "2026-04-27T14:00:00",
            "swh": 1.0706442594528198
          },
          {
            "lead_hour": -80,
            "time": "2026-04-27T15:00:00",
            "swh": 1.1890251636505127
          },
          {
            "lead_hour": -79,
            "time": "2026-04-27T16:00:00",
            "swh": 1.257188320159912
          },
          {
            "lead_hour": -78,
            "time": "2026-04-27T17:00:00",
            "swh": 1.256417751312256
          },
          {
            "lead_hour": -77,
            "time": "2026-04-27T18:00:00",
            "swh": 1.19686758518219
          },
          {
            "lead_hour": -76,
            "time": "2026-04-27T19:00:00",
            "swh": 1.1205027103424072
          },
          {
            "lead_hour": -75,
            "time": "2026-04-27T20:00:00",
            "swh": 1.0486013889312744
          },
          {
            "lead_hour": -74,
            "time": "2026-04-27T21:00:00",
            "swh": 0.9916085600852966
          },
          {
            "lead_hour": -73,
            "time": "2026-04-27T22:00:00",
            "swh": 0.9418702125549316
          },
          {
            "lead_hour": -72,
            "time": "2026-04-27T23:00:00",
            "swh": 0.8851984739303589
          },
          {
            "lead_hour": -71,
            "time": "2026-04-28T00:00:00",
            "swh": 0.834967315196991
          },
          {
            "lead_hour": -70,
            "time": "2026-04-28T01:00:00",
            "swh": 0.7962324023246765
          },
          {
            "lead_hour": -69,
            "time": "2026-04-28T02:00:00",
            "swh": 0.7649964690208435
          },
          {
            "lead_hour": -68,
            "time": "2026-04-28T03:00:00",
            "swh": 0.7403789162635803
          },
          {
            "lead_hour": -67,
            "time": "2026-04-28T04:00:00",
            "swh": 0.7198923230171204
          },
          {
            "lead_hour": -66,
            "time": "2026-04-28T05:00:00",
            "swh": 0.7015442848205566
          },
          {
            "lead_hour": -65,
            "time": "2026-04-28T06:00:00",
            "swh": 0.6942070126533508
          },
          {
            "lead_hour": -64,
            "time": "2026-04-28T07:00:00",
            "swh": 0.7017707228660583
          },
          {
            "lead_hour": -63,
            "time": "2026-04-28T08:00:00",
            "swh": 0.7142136096954346
          },
          {
            "lead_hour": -62,
            "time": "2026-04-28T09:00:00",
            "swh": 0.7237584590911865
          },
          {
            "lead_hour": -61,
            "time": "2026-04-28T10:00:00",
            "swh": 0.7226653099060059
          },
          {
            "lead_hour": -60,
            "time": "2026-04-28T11:00:00",
            "swh": 0.7137309908866882
          },
          {
            "lead_hour": -59,
            "time": "2026-04-28T12:00:00",
            "swh": 0.7031562924385071
          },
          {
            "lead_hour": -58,
            "time": "2026-04-28T13:00:00",
            "swh": 0.7077295184135437
          },
          {
            "lead_hour": -57,
            "time": "2026-04-28T14:00:00",
            "swh": 0.7226252555847168
          },
          {
            "lead_hour": -56,
            "time": "2026-04-28T15:00:00",
            "swh": 0.7462781667709351
          },
          {
            "lead_hour": -55,
            "time": "2026-04-28T16:00:00",
            "swh": 0.7749180793762207
          },
          {
            "lead_hour": -54,
            "time": "2026-04-28T17:00:00",
            "swh": 0.8051400780677795
          },
          {
            "lead_hour": -53,
            "time": "2026-04-28T18:00:00",
            "swh": 0.8263658285140991
          },
          {
            "lead_hour": -52,
            "time": "2026-04-28T19:00:00",
            "swh": 0.8301692605018616
          },
          {
            "lead_hour": -51,
            "time": "2026-04-28T20:00:00",
            "swh": 0.8171917796134949
          },
          {
            "lead_hour": -50,
            "time": "2026-04-28T21:00:00",
            "swh": 0.7888470888137817
          },
          {
            "lead_hour": -49,
            "time": "2026-04-28T22:00:00",
            "swh": 0.7528856992721558
          },
          {
            "lead_hour": -48,
            "time": "2026-04-28T23:00:00",
            "swh": 0.7028613686561584
          },
          {
            "lead_hour": -47,
            "time": "2026-04-29T00:00:00",
            "swh": 0.65406334400177
          },
          {
            "lead_hour": -46,
            "time": "2026-04-29T01:00:00",
            "swh": 0.6085864305496216
          },
          {
            "lead_hour": -45,
            "time": "2026-04-29T02:00:00",
            "swh": 0.5670789480209351
          },
          {
            "lead_hour": -44,
            "time": "2026-04-29T03:00:00",
            "swh": 0.5299844145774841
          },
          {
            "lead_hour": -43,
            "time": "2026-04-29T04:00:00",
            "swh": 0.497130811214447
          },
          {
            "lead_hour": -42,
            "time": "2026-04-29T05:00:00",
            "swh": 0.4673436284065246
          },
          {
            "lead_hour": -41,
            "time": "2026-04-29T06:00:00",
            "swh": 0.4404803514480591
          },
          {
            "lead_hour": -40,
            "time": "2026-04-29T07:00:00",
            "swh": 0.4177218079566955
          },
          {
            "lead_hour": -39,
            "time": "2026-04-29T08:00:00",
            "swh": 0.3971948027610779
          },
          {
            "lead_hour": -38,
            "time": "2026-04-29T09:00:00",
            "swh": 0.3787204027175903
          },
          {
            "lead_hour": -37,
            "time": "2026-04-29T10:00:00",
            "swh": 0.3576515913009643
          },
          {
            "lead_hour": -36,
            "time": "2026-04-29T11:00:00",
            "swh": 0.34566730260849
          },
          {
            "lead_hour": -35,
            "time": "2026-04-29T12:00:00",
            "swh": 0.3343865275382995
          },
          {
            "lead_hour": -34,
            "time": "2026-04-29T13:00:00",
            "swh": 0.3253853917121887
          },
          {
            "lead_hour": -33,
            "time": "2026-04-29T14:00:00",
            "swh": 0.3215152621269226
          },
          {
            "lead_hour": -32,
            "time": "2026-04-29T15:00:00",
            "swh": 0.3186256289482116
          },
          {
            "lead_hour": -31,
            "time": "2026-04-29T16:00:00",
            "swh": 0.3173975348472595
          },
          {
            "lead_hour": -30,
            "time": "2026-04-29T17:00:00",
            "swh": 0.3188483715057373
          },
          {
            "lead_hour": -29,
            "time": "2026-04-29T18:00:00",
            "swh": 0.3177067637443542
          },
          {
            "lead_hour": -28,
            "time": "2026-04-29T19:00:00",
            "swh": 0.3204556703567505
          },
          {
            "lead_hour": -27,
            "time": "2026-04-29T20:00:00",
            "swh": 0.3303040266036987
          },
          {
            "lead_hour": -26,
            "time": "2026-04-29T21:00:00",
            "swh": 0.3415203094482422
          },
          {
            "lead_hour": -25,
            "time": "2026-04-29T22:00:00",
            "swh": 0.3436062633991241
          },
          {
            "lead_hour": -24,
            "time": "2026-04-29T23:00:00",
            "swh": 0.3433529734611511
          },
          {
            "lead_hour": -23,
            "time": "2026-04-30T00:00:00",
            "swh": 0.3430669903755188
          },
          {
            "lead_hour": -22,
            "time": "2026-04-30T01:00:00",
            "swh": 0.3402701616287231
          },
          {
            "lead_hour": -21,
            "time": "2026-04-30T02:00:00",
            "swh": 0.3430957198143005
          },
          {
            "lead_hour": -20,
            "time": "2026-04-30T03:00:00",
            "swh": 0.3497432470321655
          },
          {
            "lead_hour": -19,
            "time": "2026-04-30T04:00:00",
            "swh": 0.359199583530426
          },
          {
            "lead_hour": -18,
            "time": "2026-04-30T05:00:00",
            "swh": 0.3732768893241882
          },
          {
            "lead_hour": -17,
            "time": "2026-04-30T06:00:00",
            "swh": 0.3940273523330688
          },
          {
            "lead_hour": -16,
            "time": "2026-04-30T07:00:00",
            "swh": 0.4249669313430786
          },
          {
            "lead_hour": -15,
            "time": "2026-04-30T08:00:00",
            "swh": 0.4577997922897339
          },
          {
            "lead_hour": -14,
            "time": "2026-04-30T09:00:00",
            "swh": 0.4828492403030395
          },
          {
            "lead_hour": -13,
            "time": "2026-04-30T10:00:00",
            "swh": 0.4741077423095703
          },
          {
            "lead_hour": -12,
            "time": "2026-04-30T11:00:00",
            "swh": 0.4642034769058227
          },
          {
            "lead_hour": -11,
            "time": "2026-04-30T12:00:00",
            "swh": 0.451267659664154
          },
          {
            "lead_hour": -10,
            "time": "2026-04-30T13:00:00",
            "swh": 0.4363808035850525
          },
          {
            "lead_hour": -9,
            "time": "2026-04-30T14:00:00",
            "swh": 0.4263633489608764
          },
          {
            "lead_hour": -8,
            "time": "2026-04-30T15:00:00",
            "swh": 0.4228972792625427
          },
          {
            "lead_hour": -7,
            "time": "2026-04-30T16:00:00",
            "swh": 0.425144612789154
          },
          {
            "lead_hour": -6,
            "time": "2026-04-30T17:00:00",
            "swh": 0.4275838732719421
          },
          {
            "lead_hour": -5,
            "time": "2026-04-30T18:00:00",
            "swh": 0.4308874011039734
          },
          {
            "lead_hour": -4,
            "time": "2026-04-30T19:00:00",
            "swh": 0.4393284916877746
          },
          {
            "lead_hour": -3,
            "time": "2026-04-30T20:00:00",
            "swh": 0.4533759355545044
          },
          {
            "lead_hour": -2,
            "time": "2026-04-30T21:00:00",
            "swh": 0.46608567237854
          },
          {
            "lead_hour": -1,
            "time": "2026-04-30T22:00:00",
            "swh": 0.4642746448516845
          },
          {
            "lead_hour": 0,
            "time": "2026-04-30T23:00:00",
            "swh": 0.4652509689331054
          }
        ],
        "forecast": [
          {
            "lead_hour": 1,
            "time": "2026-05-01T00:00:00",
            "swh": 0.47535303235054016
          },
          {
            "lead_hour": 2,
            "time": "2026-05-01T01:00:00",
            "swh": 0.47350913286209106
          },
          {
            "lead_hour": 3,
            "time": "2026-05-01T02:00:00",
            "swh": 0.47643762826919556
          },
          {
            "lead_hour": 4,
            "time": "2026-05-01T03:00:00",
            "swh": 0.47436922788619995
          },
          {
            "lead_hour": 5,
            "time": "2026-05-01T04:00:00",
            "swh": 0.4617392122745514
          },
          {
            "lead_hour": 6,
            "time": "2026-05-01T05:00:00",
            "swh": 0.4552498757839203
          },
          {
            "lead_hour": 7,
            "time": "2026-05-01T06:00:00",
            "swh": 0.4463006258010864
          },
          {
            "lead_hour": 8,
            "time": "2026-05-01T07:00:00",
            "swh": 0.442247211933136
          },
          {
            "lead_hour": 9,
            "time": "2026-05-01T08:00:00",
            "swh": 0.4535890817642212
          },
          {
            "lead_hour": 10,
            "time": "2026-05-01T09:00:00",
            "swh": 0.476301372051239
          },
          {
            "lead_hour": 11,
            "time": "2026-05-01T10:00:00",
            "swh": 0.49004289507865906
          },
          {
            "lead_hour": 12,
            "time": "2026-05-01T11:00:00",
            "swh": 0.4958401322364807
          },
          {
            "lead_hour": 13,
            "time": "2026-05-01T12:00:00",
            "swh": 0.5012254118919373
          },
          {
            "lead_hour": 14,
            "time": "2026-05-01T13:00:00",
            "swh": 0.512195885181427
          },
          {
            "lead_hour": 15,
            "time": "2026-05-01T14:00:00",
            "swh": 0.505916953086853
          },
          {
            "lead_hour": 16,
            "time": "2026-05-01T15:00:00",
            "swh": 0.481921911239624
          },
          {
            "lead_hour": 17,
            "time": "2026-05-01T16:00:00",
            "swh": 0.45707327127456665
          },
          {
            "lead_hour": 18,
            "time": "2026-05-01T17:00:00",
            "swh": 0.4321438670158386
          },
          {
            "lead_hour": 19,
            "time": "2026-05-01T18:00:00",
            "swh": 0.40374529361724854
          },
          {
            "lead_hour": 20,
            "time": "2026-05-01T19:00:00",
            "swh": 0.382734477519989
          },
          {
            "lead_hour": 21,
            "time": "2026-05-01T20:00:00",
            "swh": 0.3710583448410034
          },
          {
            "lead_hour": 22,
            "time": "2026-05-01T21:00:00",
            "swh": 0.36655932664871216
          },
          {
            "lead_hour": 23,
            "time": "2026-05-01T22:00:00",
            "swh": 0.3597027063369751
          },
          {
            "lead_hour": 24,
            "time": "2026-05-01T23:00:00",
            "swh": 0.3533039093017578
          },
          {
            "lead_hour": 25,
            "time": "2026-05-02T00:00:00",
            "swh": 0.3408890962600708
          },
          {
            "lead_hour": 26,
            "time": "2026-05-02T01:00:00",
            "swh": 0.330136775970459
          },
          {
            "lead_hour": 27,
            "time": "2026-05-02T02:00:00",
            "swh": 0.3220406472682953
          },
          {
            "lead_hour": 28,
            "time": "2026-05-02T03:00:00",
            "swh": 0.3107072114944458
          },
          {
            "lead_hour": 29,
            "time": "2026-05-02T04:00:00",
            "swh": 0.30880996584892273
          },
          {
            "lead_hour": 30,
            "time": "2026-05-02T05:00:00",
            "swh": 0.3110320270061493
          },
          {
            "lead_hour": 31,
            "time": "2026-05-02T06:00:00",
            "swh": 0.3094395101070404
          },
          {
            "lead_hour": 32,
            "time": "2026-05-02T07:00:00",
            "swh": 0.3165993094444275
          },
          {
            "lead_hour": 33,
            "time": "2026-05-02T08:00:00",
            "swh": 0.33208638429641724
          },
          {
            "lead_hour": 34,
            "time": "2026-05-02T09:00:00",
            "swh": 0.3460690379142761
          },
          {
            "lead_hour": 35,
            "time": "2026-05-02T10:00:00",
            "swh": 0.3615787625312805
          },
          {
            "lead_hour": 36,
            "time": "2026-05-02T11:00:00",
            "swh": 0.37570565938949585
          },
          {
            "lead_hour": 37,
            "time": "2026-05-02T12:00:00",
            "swh": 0.382516086101532
          },
          {
            "lead_hour": 38,
            "time": "2026-05-02T13:00:00",
            "swh": 0.38466620445251465
          },
          {
            "lead_hour": 39,
            "time": "2026-05-02T14:00:00",
            "swh": 0.3867325186729431
          },
          {
            "lead_hour": 40,
            "time": "2026-05-02T15:00:00",
            "swh": 0.3920972943305969
          },
          {
            "lead_hour": 41,
            "time": "2026-05-02T16:00:00",
            "swh": 0.39999938011169434
          },
          {
            "lead_hour": 42,
            "time": "2026-05-02T17:00:00",
            "swh": 0.4211007356643677
          },
          {
            "lead_hour": 43,
            "time": "2026-05-02T18:00:00",
            "swh": 0.45665210485458374
          },
          {
            "lead_hour": 44,
            "time": "2026-05-02T19:00:00",
            "swh": 0.49373823404312134
          },
          {
            "lead_hour": 45,
            "time": "2026-05-02T20:00:00",
            "swh": 0.5346894860267639
          },
          {
            "lead_hour": 46,
            "time": "2026-05-02T21:00:00",
            "swh": 0.5783859491348267
          },
          {
            "lead_hour": 47,
            "time": "2026-05-02T22:00:00",
            "swh": 0.6277113556861877
          },
          {
            "lead_hour": 48,
            "time": "2026-05-02T23:00:00",
            "swh": 0.6806478500366211
          },
          {
            "lead_hour": 49,
            "time": "2026-05-03T00:00:00",
            "swh": 0.7306101322174072
          },
          {
            "lead_hour": 50,
            "time": "2026-05-03T01:00:00",
            "swh": 0.7694475054740906
          },
          {
            "lead_hour": 51,
            "time": "2026-05-03T02:00:00",
            "swh": 0.8029110431671143
          },
          {
            "lead_hour": 52,
            "time": "2026-05-03T03:00:00",
            "swh": 0.8260111808776855
          },
          {
            "lead_hour": 53,
            "time": "2026-05-03T04:00:00",
            "swh": 0.833031415939331
          },
          {
            "lead_hour": 54,
            "time": "2026-05-03T05:00:00",
            "swh": 0.8260478973388672
          },
          {
            "lead_hour": 55,
            "time": "2026-05-03T06:00:00",
            "swh": 0.8057671785354614
          },
          {
            "lead_hour": 56,
            "time": "2026-05-03T07:00:00",
            "swh": 0.7880022525787354
          },
          {
            "lead_hour": 57,
            "time": "2026-05-03T08:00:00",
            "swh": 0.7691211104393005
          },
          {
            "lead_hour": 58,
            "time": "2026-05-03T09:00:00",
            "swh": 0.7515296339988708
          },
          {
            "lead_hour": 59,
            "time": "2026-05-03T10:00:00",
            "swh": 0.7444134950637817
          },
          {
            "lead_hour": 60,
            "time": "2026-05-03T11:00:00",
            "swh": 0.7387912273406982
          },
          {
            "lead_hour": 61,
            "time": "2026-05-03T12:00:00",
            "swh": 0.7329540252685547
          },
          {
            "lead_hour": 62,
            "time": "2026-05-03T13:00:00",
            "swh": 0.734147846698761
          },
          {
            "lead_hour": 63,
            "time": "2026-05-03T14:00:00",
            "swh": 0.7377986907958984
          },
          {
            "lead_hour": 64,
            "time": "2026-05-03T15:00:00",
            "swh": 0.7308098077774048
          },
          {
            "lead_hour": 65,
            "time": "2026-05-03T16:00:00",
            "swh": 0.7128992676734924
          },
          {
            "lead_hour": 66,
            "time": "2026-05-03T17:00:00",
            "swh": 0.6986719369888306
          },
          {
            "lead_hour": 67,
            "time": "2026-05-03T18:00:00",
            "swh": 0.6987716555595398
          },
          {
            "lead_hour": 68,
            "time": "2026-05-03T19:00:00",
            "swh": 0.7211503386497498
          },
          {
            "lead_hour": 69,
            "time": "2026-05-03T20:00:00",
            "swh": 0.7507336735725403
          },
          {
            "lead_hour": 70,
            "time": "2026-05-03T21:00:00",
            "swh": 0.7916438579559326
          },
          {
            "lead_hour": 71,
            "time": "2026-05-03T22:00:00",
            "swh": 0.8368636965751648
          },
          {
            "lead_hour": 72,
            "time": "2026-05-03T23:00:00",
            "swh": 0.8907694220542908
          },
          {
            "lead_hour": 73,
            "time": "2026-05-04T00:00:00",
            "swh": 0.9382217526435852
          },
          {
            "lead_hour": 74,
            "time": "2026-05-04T01:00:00",
            "swh": 0.9734795093536377
          },
          {
            "lead_hour": 75,
            "time": "2026-05-04T02:00:00",
            "swh": 0.9977244734764099
          },
          {
            "lead_hour": 76,
            "time": "2026-05-04T03:00:00",
            "swh": 1.0137040615081787
          },
          {
            "lead_hour": 77,
            "time": "2026-05-04T04:00:00",
            "swh": 1.0292332172393799
          },
          {
            "lead_hour": 78,
            "time": "2026-05-04T05:00:00",
            "swh": 1.039609670639038
          },
          {
            "lead_hour": 79,
            "time": "2026-05-04T06:00:00",
            "swh": 1.0448986291885376
          },
          {
            "lead_hour": 80,
            "time": "2026-05-04T07:00:00",
            "swh": 1.053452968597412
          },
          {
            "lead_hour": 81,
            "time": "2026-05-04T08:00:00",
            "swh": 1.0504250526428223
          },
          {
            "lead_hour": 82,
            "time": "2026-05-04T09:00:00",
            "swh": 1.0413200855255127
          },
          {
            "lead_hour": 83,
            "time": "2026-05-04T10:00:00",
            "swh": 1.01908540725708
          },
          {
            "lead_hour": 84,
            "time": "2026-05-04T11:00:00",
            "swh": 0.9845528602600098
          },
          {
            "lead_hour": 85,
            "time": "2026-05-04T12:00:00",
            "swh": 0.9391080141067505
          },
          {
            "lead_hour": 86,
            "time": "2026-05-04T13:00:00",
            "swh": 0.9020185470581055
          },
          {
            "lead_hour": 87,
            "time": "2026-05-04T14:00:00",
            "swh": 0.865128755569458
          },
          {
            "lead_hour": 88,
            "time": "2026-05-04T15:00:00",
            "swh": 0.8271650075912476
          },
          {
            "lead_hour": 89,
            "time": "2026-05-04T16:00:00",
            "swh": 0.7887787222862244
          },
          {
            "lead_hour": 90,
            "time": "2026-05-04T17:00:00",
            "swh": 0.760153591632843
          },
          {
            "lead_hour": 91,
            "time": "2026-05-04T18:00:00",
            "swh": 0.7400267124176025
          },
          {
            "lead_hour": 92,
            "time": "2026-05-04T19:00:00",
            "swh": 0.7262446880340576
          },
          {
            "lead_hour": 93,
            "time": "2026-05-04T20:00:00",
            "swh": 0.706763505935669
          },
          {
            "lead_hour": 94,
            "time": "2026-05-04T21:00:00",
            "swh": 0.6759073734283447
          },
          {
            "lead_hour": 95,
            "time": "2026-05-04T22:00:00",
            "swh": 0.6354734301567078
          },
          {
            "lead_hour": 96,
            "time": "2026-05-04T23:00:00",
            "swh": 0.5891181826591492
          }
        ]
      }
    }
  }
};
